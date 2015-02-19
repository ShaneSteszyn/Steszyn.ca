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

$codes['red'] = ["#F44336", "#FFEBEE"];
$codes['pink'] = ["#E91E63", "#FCE4EC"];
$codes['purple'] = ["#9C27B0", "#F3E5F5"];
$codes['deeppurple'] = ["#673AB7", "#EDE7F6"];
$codes['indigo'] = ["#3F51B5", "#E8EAF6"];
$codes['blue'] = ["#2196F3", "#E3F2FD"];
$codes['lightblue'] = ["#03A9F4", "#E1F5FE"];
$codes['cyan'] = ["#00BCD4", "#E0F7FA"];
$codes['teal'] = ["#009688", "#E0F2F1"];
$codes['green'] = ["#4CAF50", "#E8F5E9"];
$codes['lightgreen'] = ["#8BC34A", "#F1F8E9"];
$codes['lime'] = ["#CDDC39", "#F9FBE7"];
$codes['yellow'] = ["#FFEB3B", "#FFFDE7"];
$codes['amber'] = ["#FFC107", "#FFF8E1"];
$codes['orange'] = ["#FF9800", "#FFF3E0"];
$codes['deeporange'] = ["#FF5722", "#FBE9E7"];
$codes['brown'] = ["#795548", "#EFEBE9"];
$codes['grey'] = ["#9E9E9E", "#FAFAFA"];
$codes['bluegrey'] = ["#607D8B", "#ECEFF1"];
$codes['black'] = ["#000000", "#FFFFFF"];
$codes['white'] = ["#FFFFFF", "#000000"];


$json = json_decode($response);
$count = 0;
foreach ($json->statuses as $status){

	foreach ($status->entities->hashtags as $hashtag) {
		if (isset($codes[strtolower($hashtag->text)])){ //check if color, should match json
			$colorText = strtolower($hashtag->text);
			if(!isset($colors[$colorText])){
				$colors[$colorText] = new stdClass();
				$colorCount[$colorText] = 0;
			}
			$colors[$colorText]->color = strtolower($hashtag->text);
			$tweet = new stdClass();
			$tweet->text = $status->text;
			$tweet->index = $colorCount[$colorText]++;
			$colors[$colorText]->tweets[] = $tweet;
			$count++;
			break;
		}
	}

}

$i=0;
foreach ($colors as  $key => $color) {
	$color->code = $codes["$key"];
	$color->id = $i++;
	$jsonReadyColors[] = $color;
}


$keptData['next_results'] = $json->search_metadata->next_results;
$keptData['refresh_url'] = $json->search_metadata->refresh_url;
// if (!isset($_POST['refresh'])){
// 	$keptData['colorCodes'] = '{
// 								"red": "#F44336",
// 								"pink": "#E91E63",
// 								"purple": "#9C27B0",
// 								"deeppurple": "#673AB7",
// 								"indigo": "#3F51B5",
// 								"blue": "#2196F3",
// 								"lightblue": "#03A9F4",
// 								"cyan": "#00BCD4",
// 								"teal": "#009688",
// 								"green": "#4CAF50",
// 								"lime": "#CDDC39",
// 								"yellow": "#FFEB3B",
// 								"amber": "#FFC107",
// 								"orange": "#FF9800",
// 								"deeporange": "#FF5722",
// 								"brown": "#795548",
// 								"grey": "#9E9E9E",
// 								"bluegrey": "#607D8B",
// 								"black": "#000000",
// 								"white": "#FFFFFF"
// 							}';
// 	}
$keptData['colors'] = $jsonReadyColors;
$keptData['totalColors'] = $count;


echo json_encode($keptData);
// echo $response; // let's keep this for now...

