var c_a_site_id_to_show
var containers_ids_to_show = []
var containers_ids = []
var container_id_version = []

// get site id :
for(c_a_site_id in tC.containersLaunched){
  c_a_site_id_to_show = c_a_site_id
}
console.log(`Site id is ${c_a_site_id_to_show}.`);

// get the containers ids

for(containers_id in tC.containersLaunched){
  containers_ids = tC.containersLaunched[containers_id]
}

for(containers_ids_to_show in Object.keys(containers_ids)){
  //containers_ids_to_show = Object.keys[containers_ids]
  console.log(containers_ids_to_show.values)
}

// containers_ids_to_show.forEach((item, i) => {
//   containers_ids_to_show.push(item)
// });


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
