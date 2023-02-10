 
 //Variaveis =>


/*  DENTES RETOS  */
var 
D1_dentes = document.getElementById('d1_dentes'),
D2_dentes = document.getElementById('d2_dentes');

let
N1_dentes = document.getElementById('n1_dentes'),
N2_dentes = document.getElementById('n2_dentes'),

angulo_dentes = document.getElementById('angulo_dentes'),
modulo_dentes = document.getElementById('modulo_dentes'),

DiaExterno1_dentes = document.getElementById('de1_dentes'),
DiaExterno2_dentes = document.getElementById('de2_dentes'),

DiaPrimitivo1_dentes = document.getElementById('dp1_dentes'),
DiaPrimitivo2_dentes = document.getElementById('dp2_dentes'),

DiaInterno1_dentes = document.getElementById('di1_dentes'),
DiaInterno2_dentes = document.getElementById('di2_dentes'),

DiaBase1_dentes = document.getElementById('dbase1_dentes'),
DiaBase2_dentes = document.getElementById('dbase2_dentes'),

DiaCubo1_dentes = document.getElementById('dc1_dentes'),
DiaCubo2_dentes = document.getElementById('dc2_dentes'),

CompCubo1_dentes = document.getElementById('cc1_dentes'),
CompCubo2_dentes = document.getElementById('cc2_dentes'),

FolgaDente_dentes = document.getElementById('fd_dentes'),

AlturaDente_dentes = document.getElementById('ad_dentes'),

Passo_dentes = document.getElementById('passo_dentes'),

G_dentes = document.getElementById('g_dentes'),

CompDente_dentes = document.getElementById('cd_dentes'),

CompRoda_dentes = document.getElementById('cr_dentes'),

DisCentros_dentes = document.getElementById('dec_dentes'),

Expessura_dentes = document.getElementById('exp_dentes');



/*  CONICA  */ 
let N1_conica = document.getElementById("n1_conica"),
    N2_conica = document.getElementById("n2_conica"),
    D1_conica = document.getElementById("d1_conica"),
    D2_conica = document.getElementById("d2_conica"),
    modulo_conica = document.getElementById("modulo_conica");

let DiaPrimitivo1_conica = document.getElementById("Dp1"),
    DiaPrimitivo2_conica = document.getElementById("Dp2"),

    DiaCubo1_conica = document.getElementById('Dc1'),
    DiaCubo2_conica = document.getElementById('Dc2'),

    CompCubo1_conica = document.getElementById('Cc1'),
    CompCubo2_conica = document.getElementById('Cc2'),

    Y1_conica = document.getElementById('Y1'),
    Y2_conica = document.getElementById('Y2'),
    A1_conica = document.getElementById('A1'),
    A2_conica = document.getElementById('A2'),
    G1_conica = document.getElementById('G1'),
    G2_conica = document.getElementById('G2'),
    L1_conica = document.getElementById('L1'),
    L2_conica = document.getElementById('L2'),
    b1_conica = document.getElementById('b1'),
    b2_conica = document.getElementById('b2'),

    B_conica = document.getElementById('B'),
    Z_conica = document.getElementById('Z'),
    C_conica = document.getElementById('C1'),
    D_conica = document.getElementById('D'),
    H_conica = document.getElementById('H'),
    W_conica = document.getElementById('W'),
    E_conica = document.getElementById('E'),
    FolgaDente_conica = document.getElementById('F');



   /*   Sem Fim   */ 
  let modulo_semfim = document.getElementById("M"),
  AngBeta_semfim = document.getElementById("beta"),
  AngTeta_semfim = document.getElementById("teta"),
  D2_semfim = document.getElementById("D2"),
  N1_semfim = document.getElementById("N1"),
  N2_semfim = document.getElementById("N2");

  //Parafuso
  let Ma_semfim = document.getElementById('Ma'),
  Pn_semfim = document.getElementById('Pn'),
  Pc1_semfim = document.getElementById('Pc1'),
  a_semfim = document.getElementById('a'),
  b_semfim = document.getElementById('b'),
  h_semfim = document.getElementById('h'),
  E_semfim = document.getElementById('E'),
  l_semfim = document.getElementById('l'),
  Ph_semfim = document.getElementById('Ph'),
  Mc1_semfim = document.getElementById('Mc1'),
  Pa1_semfim = document.getElementById('Pa1'),
  Dp1_semfim = document.getElementById('Dp1'),
  De1_semfim = document.getElementById('De1'),
  Di1_semfim = document.getElementById('Di1'),
  L1_semfim = document.getElementById('L1'),

  //Coroa
  Ma2_semfim = document.getElementById("Ma2"),
  Pc2_semfim = document.getElementById("Pc2"),
  L2_semfim = document.getElementById('L2'),
  L3_semfim = document.getElementById('L3'),
  K_semfim = document.getElementById('K'),
  G_semfim = document.getElementById('G'),
  s_semfim = document.getElementById('s'),
  t_semfim = document.getElementById('t'),
  Dc_semfim = document.getElementById("Dc"),
  Cc_semfim = document.getElementById("Cc"),
  Mc2_semfim = document.getElementById("Mc2"),
  Dp2_semfim = document.getElementById("Dp2"),
  De2_semfim = document.getElementById("De2"),
  Di2_semfim = document.getElementById("Di2"),
  Db2_semfim = document.getElementById("Db2"),
  Dem_semfim = document.getElementById("Dem"),
  reg_semfim = document.getElementById("reg"),
  I_semfim = document.getElementById("I"),
  rig_semfim = document.getElementById("rig");
  

  let resulatdo_dentes = document.getElementById("resultadoDentes")

  let statusDentes = document.getElementById("statusDentes")
  let statusConica = document.getElementById("statusConica")
  let statusSemfim = document.getElementById("statusSemfim")
  
  //Mensagem de prencher os campos
  function mensagem(){
    alert('Preencha todos os campo 🔴')
  }

  //botão de fechar
  function fechar(){
    statusDentes.style.display = "none"
    statusConica.style.display = "none"
    statusSemfim.style.display = "none"
  }

  //Formulas dos calculos
  let formulas = {
    Dentes: {
      diametroExterno: {
          coroa: () => {
            let total = (modulo_dentes.value * (Number(N1_dentes.value) + 2)).toFixed(2)
            return total
        },
          pinhao: () => {
            let total = (modulo_dentes.value * (Number(N2_dentes.value) + 2)).toFixed(2)
            return total
        }
      },
    
      diametroPrimitivo: {
          coroa: () => { 
            let total = (modulo_dentes.value * N1_dentes.value).toFixed(2)
            return total
        },
          pinhao: () => { 
            let total = (modulo_dentes.value * N2_dentes.value).toFixed(2) 
            return total
        }
      },
    
      diametroInterno: {
          coroa: () => {
            let total = (DiaExterno1_dentes.innerHTML - (2 * (2.16 * modulo_dentes.value))).toFixed(2)
            return total
        },
          pinhao: () => {
            let total = (DiaExterno2_dentes.innerHTML - (2 * (2.16 * modulo_dentes.value))).toFixed(2) 
            return total}
      },
    
      diametroBase: {
          coroa: () => {
                let total = (DiaPrimitivo1_dentes.innerHTML * angulo_dentes.value).toFixed(2) 
                return total
            },
            pinhao: () => {
                let total = (DiaPrimitivo2_dentes.innerHTML * angulo_dentes.value).toFixed(2) 
                return total
            }
      },
    
      comprimentoCubo: {
          coroa: () => { 
                let total = (2 * D1_dentes.value).toFixed(2) 
                return total
            },
          pinhao: () => { 
                let total = (2 * D2_dentes.value).toFixed(2) 
                return total
            }
      },
    
      diametroCubo: {
          coroa: () => {
                let total = (2 * D1_dentes.value).toFixed(2) 
                return total
            },
          pinhao: () => {
                let total = (2 * D2_dentes.value).toFixed(2) 
                return total
            }
      },
    
      folgaDente: () => {
          let total = (0.16 * modulo_dentes.value).toFixed(2)
          return total
      },
    
      distanciaCentros: () => {
          let total = ((modulo_dentes.value * (Number(N1_dentes.value) + Number(N2_dentes.value))) / 2).toFixed(2)
          return total
      },
    
      passo: () => {
          let total = (modulo_dentes.value * Math.PI).toFixed(2)
          return total
      },
    
      reforco: () => {
          let total = (Passo_dentes.innerHTML/2).toFixed(2)
          return total
      },
    
      corpoRoda: () => {
          let total = (formulas.Dentes.comprimentoDente() * 0.6).toFixed(2)
          return total
      },
    
      comprimentoDente: () => {
          let total = (8 * modulo_dentes.value).toFixed(2)
          return total
      },
    
      alturaDente: () => {
          let total = (2.16 * modulo_dentes.value).toFixed(2)
          return total
      },
    
      expessura: () => {
          let total = (Passo_dentes.innerHTML / 2).toFixed(2)
          return total
      },
    },
      
    Conica: {
      diametroExterno: {
          coroa: () => {
           total =  (parseInt(Dp1.innerHTML) + (2 * modulo_conica.value * Math.cos(B_conica.innerHTML * (Math.PI/180)))).toFixed(2)
            return total
         },
          pinhao: () => {  
            total = (parseInt(Dp2.innerHTML) + (2 * modulo_conica.value * Math.cos(B_conica.innerHTML * (Math.PI/180)))).toFixed(2)
            return total  
         }
      },
    
      diametroPrimitivo: {
          coroa: () => { DiaPrimitivo1_conica.innerHTML = (N1_conica.value * modulo_conica.value).toFixed(2) },
          pinhao: () => { DiaPrimitivo2_conica.innerHTML = (N2_conica.value * modulo_conica.value).toFixed(2) }
      },
    
      diametroCubo: {
          coroa: () => { DiaCubo1_conica.innerHTML = (2 * D1_conica.value).toFixed(2) },
          pinhao: () => { DiaCubo2_conica.innerHTML = (2 * D2_conica.value).toFixed(2) }
      },
    
      comprimentoCubo: {
          coroa: () => { CompCubo1_conica.innerHTML = (1.5 * D1_conica.value).toFixed(2) },
          pinhao: () => { CompCubo2_conica.innerHTML =( 1.5 * D2_conica.value).toFixed(2) }
      },
    
      Y: {
          coroa: () => {
              const tgY1 = (modulo_conica.value / G1_conica.innerHTML).toFixed(2)
                    Y = (Math.atan(tgY1 )) * (180/Math.PI)
      
              Y1_conica.innerHTML= (Y).toFixed(2)
          },
    
          pinhao: () => {
              const tgY2 = modulo_conica.value / G2_conica.innerHTML
                    Ys = (Math.atan(tgY2 )) * (180/Math.PI)
    
              Y2_conica.innerHTML= (Ys).toFixed(2)
          }
      },
    
      A: {
          coroa: () => { A1_conica.innerHTML = (parseInt(Y1_conica.innerHTML) + parseInt(B_conica.innerHTML)).toFixed(2) },
          pinhao: () => { A2_conica.innerHTML = ( parseInt(Y2_conica.innerHTML) + parseInt(B_conica.innerHTML)).toFixed(2) }
      },
    
      G: {
          coroa: () => { G1_conica.innerHTML = ( DiaPrimitivo2_conica.innerHTML / 2 * Math.sin(B_conica.innerHTML * (Math.PI/180))).toFixed(2) },
          pinhao: () => { G2_conica.innerHTML = ( DiaPrimitivo2_conica.innerHTML / 2 * Math.sin(B_conica.innerHTML * (Math.PI/180))).toFixed(2) }
      },
    
      L: {
          coroa: () => { L1_conica.innerHTML = ( G1_conica.innerHTML / 3).toFixed(2) },
          pinhao: () => { L2_conica.innerHTML = ( G2_conica.innerHTML / 3).toFixed(2) }
      },
    
      chaveta: {
          coroa: () => { b1_conica.innerHTML = (0.25 * D1_conica.value).toFixed(2) },
          pinhao: () => { b2_conica.innerHTML = (0.25 * D2_conica.value).toFixed(2) }
      },
    
      B: () => {
          const divisao = parseInt(N1_conica.value) / parseInt(N2_conica.value)
                rad = Math.atan(divisao)
                deg = (Math.atan(divisao)) * (180/Math.PI)
    
          B_conica.innerHTML=(deg).toFixed(2)
      },
    
      Z: () => {
          const tgZ1 = (7 * modulo_conica.value) / (6 * G1_conica.innerHTML)
                Z1 = (Math.atan(tgZ1)) * (180/Math.PI)
    
          Z_conica.innerHTML= (Z1).toFixed(2)
      },
    
      C: () => { C_conica.innerHTML = (parseInt(B_conica.innerHTML) - parseInt(Z_conica.innerHTML)).toFixed(2) },
    
      D: () => { D_conica.innerHTML = (90 - B_conica.innerHTML).toFixed(2) },
    
      H: () => { H_conica.innerHTML = (2.166 * modulo_conica.value).toFixed(2) },
    
      F: () => { FolgaDente_conica.innerHTML = ( 0.167 * modulo_conica.value).toFixed(2) },
    
      W: () => { W_conica.innerHTML = ((2.166 * modulo_conica.value) * 1.25).toFixed(2) },
    
      E: () => { E_conica.innerHTML = (1.57 * modulo_conica.value).toFixed(2) }
    },
      
    SemFim: {
      De : {
          coroa: () => { De1_semfim.innerHTML=(((modulo_semfim.value/ Math.sin(AngBeta_semfim.value * (Math.PI/180))) * N1_semfim.value) + (2 * modulo_semfim.value)).toFixed(2) },
          parafuso: () => { De2_semfim.innerHTML= (parseInt(Dp2_semfim.innerHTML) + (2 * modulo_semfim.value)).toFixed(2) }
      },

      Dp: {
          coroa: () => { Dp1_semfim.innerHTML=(Mc1_semfim.innerHTML * N1_semfim.value).toFixed(2) },
          parafuso: () => { Dp2_semfim.innerHTML=(Mc2_semfim.innerHTML * N2_semfim.value).toFixed(2) }
      },

      Di : {
          coroa: () => { Di1_semfim.innerHTML=(Dp1_semfim.innerHTML - (modulo_semfim.value * 2.334)).toFixed(2) },
          parafuso: () => { Di2_semfim.innerHTML= (Dp2_semfim.innerHTML - (2.334*modulo_semfim.value)).toFixed(2) }
      },

      Pc : {
          coroa: () => { Pc2_semfim.innerHTML=( Mc2_semfim.innerHTML * Math.PI).toFixed(2) },
          parafuso: () => { Pc1_semfim.innerHTML=( (modulo_semfim.value/ Math.sin(AngBeta_semfim.value * (Math.PI/180)))*Math.PI).toFixed(2) } 
      },

      L: {
          coroa1: () => { L2_semfim.innerHTML= (8 * modulo_semfim.value).toFixed(2) },
          coroa: () => { L3_semfim.innerHTML=((8 * modulo_semfim.value) * 0.6).toFixed(2) },
          parafuso: () => { L1_semfim.innerHTML= (2 * Ma_semfim.innerHTML * (1+Math.sqrt(N2_semfim.value))).toFixed(2) }
      },
      
      Mc: {
          coroa: () => { Mc1_semfim.innerHTML=(modulo_semfim.value/ Math.sin(AngBeta_semfim.value * (Math.PI/180))).toFixed(2) },
          parafuso: () => { Mc2_semfim.innerHTML=(modulo_semfim.value / Math.cos(AngBeta_semfim.value * (Math.PI/180))).toFixed(2) }
      },

      Ma: {
          coroa: () => { Ma_semfim.innerHTML=(modulo_semfim.value / Math.cos(AngBeta_semfim.value * (Math.PI/180))).toFixed(2) },
          parafuso: () => {  Ma2_semfim.innerHTML=(modulo_semfim.value/ Math.sin(AngBeta_semfim.value * (Math.PI/180))).toFixed(2) }
      },

      Pn: () => {  Pn_semfim.innerHTML= (modulo_semfim.value * Math.PI).toFixed(2) },

      Ph: () => { Ph_semfim.innerHTML= (((modulo_semfim.value / Math.cos(AngBeta_semfim.value * (Math.PI/180))) * Math.PI) * N1_semfim.value).toFixed(2) },

      Pa: () => { Pa1_semfim.innerHTML=( (modulo_semfim.value / Math.cos(AngBeta_semfim.value * (Math.PI/180))) * Math.PI).toFixed(2) },

      a: () => {  a_semfim.innerHTML= modulo_semfim.value },

      b: () => { b_semfim.innerHTML=(1.167 * modulo_semfim.value).toFixed(2) },

      h: () => { h_semfim.innerHTML=(parseInt(modulo_semfim.value) + (1.167 * modulo_semfim.value)).toFixed(2) },

      l: () => { l_semfim.innerHTML=(0.167 * modulo_semfim.value).toFixed(2) },

      E: () => { E_semfim.innerHTML=  ((modulo_semfim.value * Math.PI) / 2).toFixed(2) },

      Dc: () => { Dc_semfim.innerHTML=((D2_semfim.value - 5) / 2).toFixed(2) },

      Cc: () => { Cc_semfim.innerHTML=(D2_semfim.value * 1.5).toFixed(2) },

      Db: () => { Db2_semfim.innerHTML = (Dp2_semfim.innerHTML * Math.cos(AngTeta_semfim.value * (Math.PI/180))).toFixed(2) },

      Dem: () => { Dem_semfim.innerHTML = (parseInt(Dp2_semfim.innerHTML) + (3 * modulo_semfim.value)).toFixed(2) },

      Reg : () => { reg_semfim.innerHTML=(I_semfim.innerHTML - (Di2_semfim.innerHTML/2)).toFixed(2) },

      Rig: () => { rig_semfim.innerHTML=(I_semfim.innerHTML - (De2_semfim.innerHTML/2)).toFixed(2) },

      I: () => { I_semfim.innerHTML= (((Mc1_semfim.innerHTML * N1_semfim.value) + (Mc2_semfim.innerHTML * N2_semfim.value)) / 2).toFixed(2) },

      K: () => { K_semfim.innerHTML=(6.5 * modulo_semfim.value).toFixed(2) },

      G: () => { G_semfim.innerHTML=((modulo_semfim.value * Math.PI) / 2).toFixed(2) },

      s: () => { s_semfim.innerHTML= (D2_semfim.value/4).toFixed(2) },

      t: () => { t_semfim.innerHTML=(( D2_semfim.value/4) / 2).toFixed(2) },

    }
  }

  //Calcular
  function calculoDentes(){

    if((N1_dentes.value != "") && (N2_dentes.value != "") && (D1_dentes.value != "") && (D2_dentes.value != "") && (modulo_dentes.value != "") && (angulo_dentes.value != "")){

        resulatdo_dentes.innerHTML = `
            <table>
                    <tbody>
                        <tr>
                            <td>FORMULAS</td>
                            <td>COROA</td>
                            <td>PINHÃO</td>
                        </tr>

                        <tr>
                            <td>Diametro externo :</td>
                            <td > <span id="de1_dentes">${(modulo_dentes.value * (Number(N1_dentes.value) + 2)).toFixed(2)}</span> mm </td>
                            <td > <span id="de2_dentes">${(modulo_dentes.value * (Number(N2_dentes.value) + 2)).toFixed(2)}</span> mm </td>
                        </tr>
                        <tr>
                            <td>Diametro primitivo :</td>
                            <td > <span id="dp1_dentes">0</span> mm </td>
                            <td > <span id="dp2_dentes">0</span> mm </td>
                        </tr>
                        <tr>
                            <td>Diametro interno :</td>
                            <td > <span id="di1_dentes">0</span> mm </td>
                            <td > <span id="di2_dentes">0</span> mm </td>
                        </tr>
                        <tr>
                            <td>Diametro de base :</td>
                            <td > <span id="dbase1_dentes">0</span> mm </td>
                            <td > <span id="dbase2_dentes">0</span> mm </td>
                        </tr>
                        <tr>
                            <td>Diametro do cubo :</td>
                            <td > <span id="dc1_dentes">0</span> mm </td>
                            <td > <span id="dc2_dentes">0</span> mm </td>
                        </tr>
                        <tr>
                            <td>Comprimento do cubo :</td>
                            <td > <span id="cc1_dentes">0</span> mm </td>
                            <td > <span id="cc2_dentes">0</span> mm </td>
                        </tr>
                        <tr>
                            <td><hr></td>
                            <td><hr></td>
                            <td><hr></td>
                        </tr>
                        
                        <tr>
                            <td>Folga no pé do dente :</td>
                            <td > <span id="fd_dentes">0</span> mm </td>
                        </tr>
                        <tr>
                            <td>Altura do dente:</td>
                            <td > <span id="ad_dentes">0</span> mm </td>
                        </tr>
                        <tr>
                            <td>G :</td>
                            <td > <span id="g_dentes">0</span> mm </td>
                        </tr>
                        <tr>
                            <td>Comprimento do Dente :</td>
                            <td > <span id="cd_dentes">0</span> mm </td>
                        </tr>
                        <tr>
                            <td>Corpo da Roda :</td>
                            <td > <span id="cr_dentes">0</span> mm </td>
                        </tr>
                        <tr>
                            <td>Distancia entre Centros :</td>
                            <td > <span id="dec_dentes">0</span> mm </td>
                        </tr>
                        <tr>
                            <td>Espessura :</td> 
                            <td > <span id="exp_dentes">0</span> mm </td>
                        </tr>
                    </tbody>
                </table>
        `

        // DiaExterno1_dentes.innerHTML = formulas.Dentes.diametroExterno.coroa()
        // DiaExterno2_dentes.innerHTML = formulas.Dentes.diametroExterno.pinhao()

        // DiaPrimitivo1_dentes.innerHTML = formulas.Dentes.diametroPrimitivo.coroa()
        // DiaPrimitivo2_dentes.innerHTML = formulas.Dentes.diametroPrimitivo.pinhao()

        // DiaInterno1_dentes.innerHTML = formulas.Dentes.diametroInterno.coroa()
        // DiaInterno2_dentes.innerHTML = formulas.Dentes.diametroInterno.pinhao()

        // DiaBase1_dentes.innerHTML = formulas.Dentes.diametroBase.coroa()
        // DiaBase2_dentes.innerHTML = formulas.Dentes.diametroBase.pinhao()

        // CompCubo1_dentes.innerHTML = formulas.Dentes.diametroCubo.coroa()
        // CompCubo2_dentes.innerHTML = formulas.Dentes.diametroCubo.pinhao()

        // DiaCubo1_dentes.innerHTML = formulas.Dentes.comprimentoCubo.coroa()
        // DiaCubo2_dentes.innerHTML = formulas.Dentes.comprimentoCubo.pinhao()

        // FolgaDente_dentes.innerHTML = formulas.Dentes.folgaDente()
        
        // DisCentros_dentes.innerHTML = formulas.Dentes.distanciaCentros()

        // Passo_dentes.innerHTML = formulas.Dentes.passo()

        // G_dentes.innerHTML = formulas.Dentes.reforco()

        // CompRoda_dentes.innerHTML = formulas.Dentes.corpoRoda()

        // CompDente_dentes.innerHTML = formulas.Dentes.comprimentoDente()

        // AlturaDente_dentes.innerHTML = formulas.Dentes.alturaDente()

        // Expessura_dentes.innerHTML = formulas.Dentes.expessura()

            
        statusDentes.style.display = 'inline-block'
            
    }else{
        mensagem()
    }
}

  function calculoConica(){

    if((N1_conica.value != "") && (N2_conica.value != "") && (D1_conica.value != "") && (D2_conica.value != "") && (modulo_conica.value != "")) {

      De1.innerHTML = formulas.Conica.diametroExterno.coroa()
      De2.innerHTML = formulas.Conica.diametroExterno.pinhao()
  

      formulas.Conica.diametroPrimitivo.coroa()
      formulas.Conica.diametroPrimitivo.pinhao()
  

      formulas.Conica.diametroCubo.coroa()
      formulas.Conica.diametroCubo.pinhao()

      formulas.Conica.comprimentoCubo.coroa()
      formulas.Conica.comprimentoCubo.pinhao()

      formulas.Conica.Y.coroa()
      formulas.Conica.Y.pinhao()

      formulas.Conica.A.coroa()
      formulas.Conica.A.pinhao()

      formulas.Conica.G.coroa()
      formulas.Conica.G.pinhao()

      formulas.Conica.L.coroa()
      formulas.Conica.L.pinhao()

      formulas.Conica.chaveta.coroa()
      formulas.Conica.chaveta.pinhao()

      formulas.Conica.B()
      formulas.Conica.Z()
      formulas.Conica.C()
      formulas.Conica.D()
      formulas.Conica.H()
      formulas.Conica.F()
      formulas.Conica.W()
      formulas.Conica.E()
      
        statusConica.style.display = "inline-block"
        
    }else{
      mensagem()
      
    }
  }

  function calculoSemfim(){

    if((N1_semfim.value != "") && (D2_semfim.value != "") && (N2_semfim.value != "") && (AngTeta_semfim.value != "") && (AngBeta_semfim.value != "") && (modulo_semfim.value != "")){
      formulas.SemFim.De.coroa()
      formulas.SemFim.De.parafuso()

      formulas.SemFim.Dp.coroa()
      formulas.SemFim.Dp.parafuso()

      formulas.SemFim.Di.coroa()
      formulas.SemFim.Di.parafuso()

      formulas.SemFim.Pc.coroa()
      formulas.SemFim.Pc.parafuso()

      formulas.SemFim.L.coroa1()
      formulas.SemFim.L.coroa()
      formulas.SemFim.L.parafuso()

      formulas.SemFim.Mc.coroa()
      formulas.SemFim.Mc.parafuso()

      formulas.SemFim.Ma.coroa()
      formulas.SemFim.Ma.parafuso()

      formulas.SemFim.Pn()
      formulas.SemFim.Ph()
      formulas.SemFim.Pa()

      formulas.SemFim.Dc()

      formulas.SemFim.Db()

      formulas.SemFim.Cc()

      formulas.SemFim.Dem()

      formulas.SemFim.Reg()

      formulas.SemFim.Rig()

      formulas.SemFim.a()
      formulas.SemFim.b()
      formulas.SemFim.h()
      formulas.SemFim.l()
      formulas.SemFim.E()
      formulas.SemFim.I()
      formulas.SemFim.K()
      formulas.SemFim.G()
      formulas.SemFim.s()
      formulas.SemFim.t()

        statusSemfim.style.display = "inline-block"
      
    }else{
        mensagem()
    }
  }