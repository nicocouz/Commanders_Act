var site_id
var containers_ids = []
var container_id_version = []

// get site id :
for(site_id in tC.containersLaunched){
  site_id = site_id
}
console.log(`Site id is ${site_id}.`);

// get the containers ids
for(site_id in tC.containersLaunched){
  var containers_ids = tC.containersLaunched[site_id]
}

console.group("%c containers_ids ","color:white;background-color:green;font-family:system-ui;font-size:15px")
console.log(containers_ids);
console.groupEnd()


for(container_id in containers_ids){
  container_id_version.push(containers_ids[container_id])
}

console.group("%c container_id_version ","color:white;background-color:green;font-family:system-ui;font-size:15px")
console.log(container_id_version);
console.groupEnd()

// for(tag in container_id){
//   console.log()
// }
//  //console.log(container_id[0].label);
