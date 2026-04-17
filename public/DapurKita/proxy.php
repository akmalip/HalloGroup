<?php
// DapurKita - Gemini API Proxy
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit(); }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['error' => 'Method not allowed']); exit(); }

$GEMINI_API_KEY = 'GEMINI_API_KEY_HERE';
$GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent';

$raw = file_get_contents('php://input');
if (empty($raw)) { http_response_code(400); echo json_encode(['error' => 'Empty body']); exit(); }

$body = json_decode($raw, true);
if (json_last_error() !== JSON_ERROR_NONE || empty($body)) {
    http_response_code(400); echo json_encode(['error' => 'Invalid JSON']); exit();
}

// Ambil prompt dari format Anthropic
$prompt = '';
if (!empty($body['messages'])) {
    foreach ($body['messages'] as $msg) {
        if ($msg['role'] === 'user') {
            $prompt = is_array($msg['content']) ? $msg['content'][0]['text'] : $msg['content'];
            break;
        }
    }
}
if (empty($prompt)) { http_response_code(400); echo json_encode(['error' => 'No prompt']); exit(); }

$geminiBody = [
    'contents' => [['parts' => [['text' => $prompt]]]],
    'generationConfig' => ['temperature' => 0.7, 'maxOutputTokens' => 4000]
];

$ch = curl_init($GEMINI_URL);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($geminiBody),
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'X-goog-api-key: ' . $GEMINI_API_KEY,
    ],
    CURLOPT_TIMEOUT        => 60,
    CURLOPT_SSL_VERIFYPEER => true,
]);

$response = curl_exec($ch);
$httpCode  = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) { http_response_code(500); echo json_encode(['error' => 'cURL: ' . $curlError]); exit(); }

$geminiData = json_decode($response, true);

if ($httpCode !== 200 || empty($geminiData['candidates'][0]['content']['parts'][0]['text'])) {
    http_response_code(500);
    echo json_encode(['error' => 'Gemini error', 'detail' => $geminiData]); exit();
}

// Konversi ke format Anthropic agar JS tidak perlu diubah
$text = $geminiData['candidates'][0]['content']['parts'][0]['text'];
http_response_code(200);
echo json_encode([
    'content' => [['type' => 'text', 'text' => $text]]
]);
?>