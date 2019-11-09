nprep = prompt("Nombre de cours distincts", "2");

HC = 0;
HP = 0;
PES = 0;
NES = 0;

var nper = [];
var ngrp = [];
var netu = [];

for (i = 0; i < nprep; i++) {
  document.write("Cours " + (i+1) + " : ");
  x = Number(prompt("Nombre de périodes", "75"));
  y = Number(prompt("Nombre de groupes", "1"));
  z = Number(prompt("Nombre d'étudiants", "40"));
  HC = HC + x*y/15;
  HP = HP + x/15;
  PES = PES + x*z/15;
  if ( x/15 >= 3 ) {
    NES = NES + z;
  }
  nper.push(x);
  ngrp.push(y);
  netu.push(z);
  document.write(x + " périodes ");
  document.write(y + " groupe(s) ");
  document.write(z + " étudiant(e)s <br><br>");
}

HCfactor = 1.2
if ( nprep <= 2 ) {
  HPfactor = 0.9;
} else if ( nprep == 3 ) {
  HPfactor = 1.1;
} else {
  HPfactor = 1.75;
}
CIp = HCfactor*HC + HPfactor*HP;
if ( PES < 415 ) {
  CIp = CIp + 0.04*PES;
} else {
  CIp = CIp + 0.04*415 + 0.07*(PES-415);
}
if ( NES >= 75 ) {
  CIp = CIp + 0.01*NES;
}
if ( NES > 160 ) {
  CIp = CIp + 0.1*(NES-160)**2;
}

document.write("CI = " + CIp);
