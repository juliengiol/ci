from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def accueil():
    if request.method == 'POST':
      inputnames = []
      inputs = []
      HC = 0
      HP = 0
      PES = 0
      NES = 0
      nprep = request.form['nprep']
      nprep = int(nprep)
      oldnprep = (len(request.form)-1)/3
      n = min(nprep,oldnprep)
      for i in range(n):
        xname = 'x'+str(i)
        yname = 'y'+str(i)
        zname = 'z'+str(i)
        inputnames.append([xname,yname,zname])
        x = request.form[inputnames[i][0]]
        x = int(x)
        y = request.form[inputnames[i][1]]
        y = int(y)
        z = request.form[inputnames[i][2]]
        z = int(z)
        inputs.append([x,y,z])
        HC = HC + x*y/15
        HP = HP + x/15
        PES = PES + x*z/15
        if x/15>=3:
          NES = NES + z
      if nprep > oldnprep:
        for i in range(n,nprep):
          xname = 'x'+str(i)
          yname = 'y'+str(i)
          zname = 'z'+str(i)
          inputnames.append([xname,yname,zname])
          x = 75
          y = 1
          z = 25
          inputs.append([x,y,z])
          HC = HC + x*y/15
          HP = HP + x/15
          PES = PES + x*z/15
          if x/15>=3:
            NES = NES + z
      HCfactor = 1.2
      if nprep <= 2:
        HPfactor = 0.9
      elif nprep == 3:
        HPfactor = 1.1
      else:
        HPfactor = 1.75
      CIp = HCfactor*HC + HPfactor*HP
      if PES<415:
        CIp += 0.04*PES
      else:
        CIp += 0.04*415 + 0.07*(PES-415)
      if NES >= 75:
        CIp += 0.01*NES
        if NES > 160:
          CIp += 0.1*(NES-160)**2
    else:
      nprep = 0
      inputnames = []
      inputs = []
      CIp = 0

    return render_template('index.html', nprep=nprep, inputnames=inputnames, inputs=inputs, CIp=CIp)
