<?
include_once('TwitterApiExchange.php');

if (isset($_POST['refresh'])){
	$getfield = "?since_id=566410011526832128&q=%23blue%2BOR%2B%23red&include_entities=1";
}
else {
	$getfield = '?q=#blue+OR+#red';
}

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "3035689029-Wpg3iJdz9AYD4Nu2QwIosL0iPEqiGIPoYlG5jND",
    'oauth_access_token_secret' => "b0OiPwqFDXgTOy2lEKa0VRX4A5gGfB0CQyrVOwJvnlNHs",
    'consumer_key' => "PVPa9pjTGSF4WvaFAGZP6JYRR",
    'consumer_secret' => "AssFwysLnNd7zHqxyY7DCWsyKLuxd6O2CW12A2dVN2M1Nulw0u"
);

$url = 'https://api.twitter.com/1.1/search/tweets.json';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
$response =  $twitter->setGetfield($getfield)
    ->buildOauth($url, $requestMethod)
    ->performRequest();

$json = json_decode($response);

foreach ($json->statuses as $status){
	// $colors[] = new stdClass();
	foreach ($status->entities->hashtags as $hashtag) {
		if (strtolower($hashtag->text) == "blue" || strtolower($hashtag->text) == "red"){ //check if color, should match json
			$colorText = strtolower($hashtag->text);
			if(!isset($colors[$colorText])){
				$colors[$colorText] = new stdClass();
			}
			$colors[$colorText]->color = $hashtag->text;
			$colors[$colorText]->tweets[] = $status->text;
			break;
		}
	}

}
$i=0;
foreach ($colors as $color) {
	$color->id=$i++;
	$jsonReadyColors[] = $color;
}


$keptData['next_results'] = $json->search_metadata->next_results;
$keptData['refresh_url'] = $json->search_metadata->refresh_url;
$keptData['colors'] = $jsonReadyColors;

echo json_encode($keptData);
// echo $response; // let's keep this for now...

