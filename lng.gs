 var qs = [
   '-in:trash label:zzz_noise_prometheus older_than:15d',
   '-in:trash label:zzz_noise_puppet older_than:15d',
   '-in:trash label:zzz_noise_saltstack older_than:15d',
   '-in:trash label:zzz_noise_golang older_than:5d',
   '-in:trash label:zzz_noise_cron older_than:15d',
   '-in:trash label:zzz_noise_firewalls older_than:15d',
   '-in:trash label:continuous-integration older_than:3d',
   '-in:trash label:cron older_than:15d',
   '-in:trash label:staff older_than:15d',
   '-in:trash label:alert older_than:15d',
   '-in:trash from:jenkins older_than:3d',
 ];




function purgeGmailFromQuery(query) {

  var threads = GmailApp.search(query);
    for (var i = 0; i < 500; i++) {
      if (threads[i] != undefined) {
        threads[i].moveToTrash(); 
      }
    }
};


function purgeGmailFromQueries() {

  for (var i = 0; i < qs.length; i++) {
    query = qs[i];
    console.log(query);
    purgeGmailFromQuery(query);
  }
}

function Intialize() {
  return;
}

function Install() {
  ScriptApp.newTrigger("purgeGmailFromQuery").timeBased().everyMinutes(5).create();

}

function Uninstall() {
  var triggers = ScriptApp.getScriptTriggers();
  for (var i=0; i<triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
}

