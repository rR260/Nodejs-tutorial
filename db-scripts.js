const cloud_site_source = ($sourceId, $sourceName) => {
    $query = "INSERT INTO `cloud_site_sources` (`source_id`, `source_name`, `source_added_by`, `added_date`) VALUES ("+ $sourceId+ "," +$sourceName+", 1, '2023-08-03 18:51:48')";
    console.log($query);
}

const cloud_site_shipment_client_apps = ($sourceId, $sourceName,$apikey,$scope,$tokens) => {
    $query = "INSERT INTO `cloud_site_shipment_client_apps` (`id`, `identifier`, `api_key`, `user_source_id`, `scope`, `authorized_ips`, `email`, `last_used`, `created_at`, `updated_at`, `deleted_at`, `tokens`, `is_oss`) VALUES ("+$sourceId+", "+$sourceName+", "+$tokens+", "+$sourceId+", "+$scope+", '[]', NULL, '2023-06-06 18:51:48', '2023-06-06 18:51:48', '2023-06-06 18:51:48', NULL, "+$tokens+", 1)";
    console.log($query);
}

module.exports.cloud_site_source = cloud_site_source
module.exports.cloud_site_shipment_client_apps = cloud_site_shipment_client_apps