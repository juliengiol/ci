function calcule() {
  var nPrep = document.getElementById("nprep").value;
  var HC = 0;
  var HP = 0;
  var PES = 0;
  var NES = 0;
  if (nPrep >= 1) {
    var nbH = parseInt(document.getElementById("heuresC1").value);
    var nbG = parseInt(document.getElementById("groupesC1").value);
    var nbE = parseInt(document.getElementById("etudiantsC1").value);
    HC = HC + nbH * nbG;
    HP = HP + nbH;
    PES = PES + nbH * nbE;
    if ( nbH >= 3 ) {
      NES = NES + nbE;
    }
  }
  if (nPrep >= 2) {
    var nbH = parseInt(document.getElementById("heuresC2").value);
    var nbG = parseInt(document.getElementById("groupesC2").value);
    var nbE = parseInt(document.getElementById("etudiantsC2").value);
    HC = HC + nbH * nbG;
    HP = HP + nbH;
    PES = PES + nbH * nbE;
    if ( nbH >= 3 ) {
      NES = NES + nbE;
    }
  }
  if (nPrep >= 3) {
    var nbH = parseInt(document.getElementById("heuresC3").value);
    var nbG = parseInt(document.getElementById("groupesC3").value);
    var nbE = parseInt(document.getElementById("etudiantsC3").value);
    HC = HC + nbH * nbG;
    HP = HP + nbH;
    PES = PES + nbH * nbE;
    if ( nbH >= 3 ) {
      NES = NES + nbE;
    }
  }
  if (nPrep >= 4) {
    var nbH = parseInt(document.getElementById("heuresC4").value);
    var nbG = parseInt(document.getElementById("groupesC4").value);
    var nbE = parseInt(document.getElementById("etudiantsC4").value);
    HC = HC + nbH * nbG;
    HP = HP + nbH;
    PES = PES + nbH * nbE;
    if ( nbH >= 3 ) {
      NES = NES + nbE;
    }
  }
  HCfactor = 1.2;
  if ( nPrep <= 2 ) {
    HPfactor = 0.9;
  } else if ( nPrep == 3 ) {
    HPfactor = 1.1;
  } else {
    HPfactor = 1.75;
  }
  CIp = HCfactor * HC + HPfactor * HP;
  if ( PES < 415 ) {
    CIp = CIp + 0.04 * PES;
  } else {
    CIp = CIp + 0.04 * 415 + 0.07 * (PES - 415);
  }
  if ( NES >= 75 ) {
    CIp = CIp + 0.01 * NES;
  }
  if ( NES > 160 ) {
    CIp = CIp + 0.1 * (NES - 160) ** 2;
  }
  CIp = CIp.toFixed(2);
  document.getElementById("montreCI").innerHTML = CIp
};

function metAJour() {
  var nPrep = document.getElementById("nprep").value;
  if (nPrep >= 1) {
    document.getElementById("montreCours1").innerHTML =
    "Cours 1 : " +
    "<select id='heuresC1' onchange='calcule()'><option value=3>3h</option><option value=4>4h</option><option value=5 selected>5h</option><option value=6>6h</option><option value=7>7h</option></select>" +
    "<select id='groupesC1' onchange='calcule()'><option value=1>1 groupe</option><option value=2>2 groupes</option><option value=3>3 groupes</option><option value=4>4 groupes</option></select>" +
    "<input id='etudiantsC1' type='number' value=25 onchange='calcule()'> étudiants"
    ;
  }
  if (nPrep >= 2) {
    document.getElementById("montreCours2").innerHTML =
    "Cours 2 : " +
    "<select id='heuresC2' onchange='calcule()'><option value=3>3h</option><option value=4>4h</option><option value=5 selected>5h</option><option value=6>6h</option><option value=7>7h</option></select>" +
    "<select id='groupesC2' onchange='calcule()'><option value=1>1 groupe</option><option value=2>2 groupes</option><option value=3>3 groupes</option><option value=4>4 groupes</option></select>" +
    "<input id='etudiantsC2' type='number' value=25 onchange='calcule()'> étudiants"
    ;
  }
  if (nPrep >= 3) {
    document.getElementById("montreCours3").innerHTML =
    "Cours 3 : " +
    "<select id='heuresC3' onchange='calcule()'><option value=3>3h</option><option value=4>4h</option><option value=5 selected>5h</option><option value=6>6h</option><option value=7>7h</option></select>" +
    "<select id='groupesC3' onchange='calcule()'><option value=1>1 groupe</option><option value=2>2 groupes</option><option value=3>3 groupes</option><option value=4>4 groupes</option></select>" +
    "<input id='etudiantsC3' type='number' value=25 onchange='calcule()'> étudiants"
    ;
  }
  if (nPrep >= 4) {
    document.getElementById("montreCours4").innerHTML =
    "Cours 4 : " +
    "<select id='heuresC4' onchange='calcule()'><option value=3>3h</option><option value=4>4h</option><option value=5 selected>5h</option><option value=6>6h</option><option value=7>7h</option></select>" +
    "<select id='groupesC4' onchange='calcule()'><option value=1>1 groupe</option><option value=2>2 groupes</option><option value=3>3 groupes</option><option value=4>4 groupes</option></select>" +
    "<input id='etudiantsC4' type='number' value=25 onchange='calcule()'> étudiants"
    ;
  }
  if (nPrep <= 3) {
    document.getElementById("montreCours4").innerHTML = ""
  }
  if (nPrep <= 2) {
    document.getElementById("montreCours3").innerHTML = ""
  }
  if (nPrep <= 1) {
    document.getElementById("montreCours2").innerHTML = ""
  }
  if (nPrep == 0) {
    document.getElementById("montreCours1").innerHTML = ""
  }
  calcule()
}
