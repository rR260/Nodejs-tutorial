const redis_scripts = ($sourceId, $apikey,$sourceName,$scope,$tokens) => {
    console.log('sadd ltb::apps '+$sourceId);
    console.log('set ltb::app::apiKey::'+$apikey+' '+ $sourceId);
    console.log('hmset ltb::app::'+$sourceId+' id '+$sourceId+' user_source_id '+$sourceId+' identifier '+$sourceName+' is_oss 0 apiKey '+$apikey+' scope '+$scope+' email "" tokens '+$tokens);
}


module.exports.redis_scripts = redis_scripts