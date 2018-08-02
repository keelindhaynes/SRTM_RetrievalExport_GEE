//You must create a polygon (feature) to act as a ROI. Name it 'polygon' for the export and clipping to work properly.


var polygon = /* color: #d63000 */geometry;


// Instantiate an image with the Image constructor.
var image = ee.Image('USGS/SRTMGL1_003');


// Display the image on the map.
Map.addLayer(image);



print('SRTM_IMAGE', image);

Map.addLayer(image, {min: 0, max: 15}, 'SRTM');

Map.addLayer(polygon);

// Export the image, specifying scale and region.
Export.image.toDrive({
  image: image,
  description: 'selected_name',
  folder: 'GoogleDrive_folder_name_and_path',
  scale: 30,
  region: polygon
});
