 //Variaveis =>

/*  DENTES RETOS  */
    let D1_dentes = document.getElementById('d1_dentes'),
        D2_dentes = document.getElementById('d2_dentes'),
        N1_dentes = document.getElementById('n1_dentes'),
        N2_dentes = document.getElementById('n2_dentes'),
        angulo_dentes = document.getElementById('angulo_dentes'),
        modulo_dentes = document.getElementById('modulo_dentes');

/*  CONICA  */ 
    let N1_conica = document.getElementById("n1_conica"),
        N2_conica = document.getElementById("n2_conica"),
        D1_conica = document.getElementById("d1_conica"),
        D2_conica = document.getElementById("d2_conica"),
        modulo_conica = document.getElementById("modulo_conica");

/*   Sem Fim   */ 
    let modulo_semfim = document.getElementById("M"),
        AngBeta_semfim = document.getElementById("beta"),
        AngTeta_semfim = document.getElementById("teta"),
        D2_semfim = document.getElementById("D2"),
        N1_semfim = document.getElementById("N1"),
        N2_semfim = document.getElementById("N2");

    let resultado_dentes = document.getElementById("resultadoDentes")
    let resultado_conica = document.getElementById("resultadoConica")
    let reusltado_semfim = document.getElementById("resultadoSemfim")
  
  //Mensagem de prencher os campos
  function mensagem(){
      alert('Preencha todos os campo 🔴')
    }
    
    let statusDentes = document.getElementById("statusDentes")
    let statusConica = document.getElementById("statusConica")
    let statusSemfim = document.getElementById("statusSemfim")

  //botão de fechar
  function fechar(){
    statusDentes.style.display = "none"
    statusConica.style.display = "none"
    statusSemfim.style.display = "none"
  }

  //Calculos
  function calculoDentes(){

        if((N1_dentes.value != "") && (N2_dentes.value != "") && (D1_dentes.value != "") && (D2_dentes.value != "") && (modulo_dentes.value != "") && (angulo_dentes.value != "")){

          const diametroExternoCoroa =  (modulo_dentes.value * (Number(N1_dentes.value) + 2)).toFixed(2)
          const diametroExternoPinhao = (modulo_dentes.value * (Number(N2_dentes.value) + 2)).toFixed(2)

          const diametroPrimitivoCoroa = (modulo_dentes.value * N1_dentes.value).toFixed(2)
          const diametroPrimitivoPinhao = (modulo_dentes.value * N2_dentes.value).toFixed(2) 

          const diametroInternoCoroa = (diametroExternoCoroa - (2 * (2.16 * modulo_dentes.value))).toFixed(2)
          const diametroInternoPinhao = (diametroExternoPinhao - (2 * (2.16 * modulo_dentes.value))).toFixed(2) 

          const deg = Math.cos(angulo_dentes.value * (Math.PI / 180))
          const diametroBaseCoroa = (diametroPrimitivoCoroa * deg).toFixed(2)
          const diametroBasePinhao = (diametroPrimitivoPinhao * deg).toFixed(2) 

          const comprimentoDiametroCuboCoroa = (2 * D1_dentes.value).toFixed(2)
          const comprimentoDiametroCuboPinhao = (2 * D2_dentes.value).toFixed(2)

          const folgaDente = (0.16 * modulo_dentes.value).toFixed(2)

          const distanciaCentros = ((modulo_dentes.value * (Number(N1_dentes.value) + Number(N2_dentes.value))) / 2).toFixed(2)

          const passo = (modulo_dentes.value * Math.PI).toFixed(2)

          const reforco = (passo/2).toFixed(2)

          const comprimentoDente = (8 * modulo_dentes.value).toFixed(2)

          const corpoRoda = (comprimentoDente * 0.6).toFixed(2)

          const alturaDente = (2.16 * modulo_dentes.value).toFixed(2)

          const espessura = (passo / 2).toFixed(2)
            
            
            resultado_dentes.innerHTML = `
                <table>
                        <tbody>
                            <tr>
                                <td>FORMULAS</td>
                                <td>COROA</td>
                                <td>PINHÃO</td>
                            </tr>

                            <tr>
                                <td>Diametro externo :</td>
                                <td > ${diametroExternoCoroa} mm </td>
                                <td > ${diametroExternoPinhao} mm </td>
                            </tr>
                            <tr>
                                <td>Diametro primitivo :</td>
                                <td > ${diametroPrimitivoCoroa} mm </td>
                                <td > ${diametroPrimitivoPinhao} mm </td>
                            </tr>
                            <tr>
                                <td>Diametro interno :</td>
                                <td > ${diametroInternoCoroa} mm </td>
                                <td > ${diametroInternoPinhao} mm </td>
                            </tr>
                            <tr>
                                <td>Diametro de base :</td>
                                <td > ${diametroBaseCoroa} mm </td>
                                <td > ${diametroBasePinhao} mm </td>
                            </tr>
                            <tr>
                                <td>Diametro do cubo :</td>
                                <td > ${comprimentoDiametroCuboCoroa} mm </td>
                                <td > ${comprimentoDiametroCuboPinhao} mm </td>
                            </tr>
                            <tr>
                                <td>Comprimento do cubo :</td>
                                <td > ${comprimentoDiametroCuboCoroa} mm </td>
                                <td > ${comprimentoDiametroCuboPinhao} mm </td>
                            </tr>
                            <tr>
                                <td><hr></td>
                                <td><hr></td>
                                <td><hr></td>
                            </tr>
                            
                            <tr>
                                <td>Folga no pé do dente :</td>
                                <td > ${folgaDente} mm </td>
                            </tr>
                            <tr>
                                <td>Altura do dente:</td>
                                <td > ${alturaDente} mm </td>
                            </tr>
                            <tr>
                                <td>Reforço (G) :</td>
                                <td > ${reforco} mm </td>
                            </tr>
                            <tr>
                                <td>Comprimento do Dente :</td>
                                <td > ${comprimentoDente} mm </td>
                            </tr>
                            <tr>
                                <td>Corpo da Roda :</td>
                                <td > ${corpoRoda} mm </td>
                            </tr>
                            <tr>
                                <td>Distancia entre Centros :</td>
                                <td > ${distanciaCentros} mm </td>
                            </tr>
                            <tr>
                                <td>Espessura :</td> 
                                <td > ${espessura} mm </td>
                            </tr>
                        </tbody>
                    </table>
            `

            console.log(diametroExternoCoroa);
    
            statusDentes.style.display = 'inline-block'
                
        }else{
            mensagem()
        }
    }

  function calculoConica(){

    if((N1_conica.value != "") && (N2_conica.value != "") && (D1_conica.value != "") && (D2_conica.value != "") && (modulo_conica.value != "")) {

      const divisao = parseInt(N1_conica.value) / parseInt(N2_conica.value)
      // const rad = Math.atan(divisao)
      const deg = Math.atan(divisao) * (180 / Math.PI)
      const angB = deg.toFixed(2)

      const diametroPrimitivoCoroa = (N1_conica.value * modulo_conica.value).toFixed(2)
      const diametroPrimitivoPinhao = (N2_conica.value * modulo_conica.value).toFixed(2)

      const diametroExternoCoroa = (parseInt(diametroPrimitivoCoroa) + 2 * modulo_conica.value * Math.cos(angB * (Math.PI / 180))).toFixed(2)
      const diametroExternoPinhao = (parseInt(diametroPrimitivoPinhao) + 2 * modulo_conica.value * Math.cos(angB * (Math.PI / 180))).toFixed(2)
      
      const diametroCuboCoroa = (2 * D1_conica.value).toFixed(2)
      const diametroCuboPinhao = (2 * D2_conica.value).toFixed(2)
      
      const comprimentoCuboCoroa = (1.5 * D1_conica.value).toFixed(2)
      const comprimentoCuboPinhao = (1.5 * D2_conica.value).toFixed(2)

      const gCoroa = ((diametroPrimitivoCoroa / 2) * Math.sin(angB * (Math.PI / 180))).toFixed(2)
      const gPinhao = ((diametroPrimitivoPinhao / 2) * Math.sin(angB * (Math.PI / 180))).toFixed(2)
      
      const tgY1 = (modulo_conica.value / gCoroa).toFixed(2)
      const Y1 = Math.atan(tgY1) * (180 / Math.PI)
      const angYCoroa = Y1.toFixed(2)

      const tgY2 = (modulo_conica.value / gPinhao).toFixed(2)
      const Y2 = Math.atan(tgY2) * (180 / Math.PI)
      const angYPinhao = Y2.toFixed(2)

      const aCoroa = (parseInt(angYCoroa) + parseInt(angB)).toFixed(2)
      const aPinhao = (parseInt(angYPinhao) + parseInt(angB)).toFixed(2)

      const lCoroa = (gCoroa / 3).toFixed(2)
      const lPinhao = (gPinhao / 3).toFixed(2)
      
      const chavetaA = (0.25 * D1_conica.value).toFixed(2)
      const chavetaB = (0.25 * D2_conica.value).toFixed(2)
    
      const tgZ1 = (7 * modulo_conica.value) / (6 * gCoroa)
      const Z1 = Math.atan(tgZ1) * (180 / Math.PI)
      const angZ = Z1.toFixed(2)
      
      const C = (parseInt(angB) - parseInt(angZ)).toFixed(2)
      
      const D = (90 - angB).toFixed(2)
      
      const H = (2.166 * modulo_conica.value).toFixed(2)
      
      const F = (0.167 * modulo_conica.value).toFixed(2)
      
      const W = (2.166 * modulo_conica.value * 1.25).toFixed(2)
      
      const E = (1.57 * modulo_conica.value).toFixed(2)


        resultado_conica.innerHTML = `
            <table>
                    <tbody>
                        <tr>
                            <td>FORMULAS</td>
                            <td>COROA</td>
                            <td>PINHÂO</td>
                        </tr>
            
                        <tr>
                            <td> Diametro Primitivo </td>
                            <td > ${diametroPrimitivoCoroa} mm </td>
                            <td > ${diametroPrimitivoPinhao} mm </td>
                        </tr>
            
                        <tr>
                            <td> Diametro Externo </td>
                            <td > ${diametroExternoCoroa} mm </td>
                            <td > ${diametroExternoPinhao} mm </td>
                        </tr>

                        <tr>
                            <td> Diametro do Cubo </td>
                            <td > ${diametroCuboCoroa} mm </td>
                            <td > ${diametroCuboPinhao} mm </td>
                        </tr>

                        <tr>
                            <td> Comprimento do Cubo </td>
                            <td > ${comprimentoCuboCoroa} mm </td>
                            <td > ${comprimentoCuboPinhao} mm </td>
                        </tr>

                        <tr>
                            <td> Y </td>
                            <td > ${angYCoroa} mm </td>
                            <td > ${angYPinhao} mm </td>
                        </tr>
                            
                        <tr>
                            <td> A </td>
                            <td > ${aCoroa} mm </td>
                            <td > ${aPinhao} mm </td>
                        </tr>

                        <tr>
                            <td> G </td>
                            <td > ${gCoroa} mm </td>
                            <td > ${gPinhao} mm </td>
                        </tr>

                        <tr>
                            <td> L </td>
                            <td > ${lCoroa} mm </td>
                            <td > ${lPinhao} mm </td>
                        </tr>

                        <tr>
                        <td><hr></td>
                        <td ><hr></td>
                        <td ><hr></td>
                        </tr>

                        <tr>
                            <td> Chaveta </td>
                            <td > ${chavetaA} mm </td>
                            <td > ${chavetaB} mm </td>
                        </tr>
            
                        <tr>
                            <td> B </td>
                            <td > ${angB} mm </td>
                        </tr>
            
                        <tr>
                            <td> Z </td>
                            <td > ${angZ} mm </td>
                        </tr>
            
                        <tr>
                            <td> C </td>
                            <td > ${C} mm </td>
                        </tr>
            
                        <tr>
                            <td> D </td>
                            <td > ${D} mm </td>
                        </tr>
            
                        <tr>
                            <td> H </td>
                            <td > ${H} mm </td>
                        </tr>
            
                        <tr>
                            <td> F </td>
                            <td > ${F} mm </td>
                        </tr>
            
                        <tr>
                            <td> W </td>
                            <td > ${W} mm </td>
                        </tr>
            
                        <tr>
                            <td> E </td>
                            <td > ${E} mm </td>
                        </tr>
                    </tbody>
                </table>
        `

        statusConica.style.display = "inline-block"
        
    }else{
      mensagem()
      
    }
  }

  function calculoSemfim(){

    if((N1_semfim.value != "") && (D2_semfim.value != "") && (N2_semfim.value != "") && (AngTeta_semfim.value != "") && (AngBeta_semfim.value != "") && (modulo_semfim.value != "")){

           const SemFim = {
             De: {
               coroa: () => {
                 De1_semfim.innerHTML = (
                   (modulo_semfim.value /
                     Math.sin(AngBeta_semfim.value * (Math.PI / 180))) *
                     N1_semfim.value +
                   2 * modulo_semfim.value
                 ).toFixed(2)
               },
               parafuso: () => {
                 De2_semfim.innerHTML = (
                   parseInt(Dp2_semfim.innerHTML) +
                   2 * modulo_semfim.value
                 ).toFixed(2)
               },
             },

             Dp: {
               coroa: () => {
                 Dp1_semfim.innerHTML = (
                   Mc1_semfim.innerHTML * N1_semfim.value
                 ).toFixed(2)
               },
               parafuso: () => {
                 Dp2_semfim.innerHTML = (
                   Mc2_semfim.innerHTML * N2_semfim.value
                 ).toFixed(2)
               },
             },

             Di: {
               coroa: () => {
                 Di1_semfim.innerHTML = (
                   Dp1_semfim.innerHTML -
                   modulo_semfim.value * 2.334
                 ).toFixed(2)
               },
               parafuso: () => {
                 Di2_semfim.innerHTML = (
                   Dp2_semfim.innerHTML -
                   2.334 * modulo_semfim.value
                 ).toFixed(2)
               },
             },

             Pc: {
               coroa: () => {
                 Pc2_semfim.innerHTML = (
                   Mc2_semfim.innerHTML * Math.PI
                 ).toFixed(2)
               },
               parafuso: () => {
                 Pc1_semfim.innerHTML = (
                   (modulo_semfim.value /
                     Math.sin(AngBeta_semfim.value * (Math.PI / 180))) *
                   Math.PI
                 ).toFixed(2)
               },
             },

             L: {
               coroa1: () => {
                 L2_semfim.innerHTML = (8 * modulo_semfim.value).toFixed(2)
               },
               coroa: () => {
                 L3_semfim.innerHTML = (8 * modulo_semfim.value * 0.6).toFixed(
                   2
                 )
               },
               parafuso: () => {
                 L1_semfim.innerHTML = (
                   2 *
                   Ma_semfim.innerHTML *
                   (1 + Math.sqrt(N2_semfim.value))
                 ).toFixed(2)
               },
             },

             Mc: {
               coroa: () => {
                 Mc1_semfim.innerHTML = (
                   modulo_semfim.value /
                   Math.sin(AngBeta_semfim.value * (Math.PI / 180))
                 ).toFixed(2)
               },
               parafuso: () => {
                 Mc2_semfim.innerHTML = (
                   modulo_semfim.value /
                   Math.cos(AngBeta_semfim.value * (Math.PI / 180))
                 ).toFixed(2)
               },
             },

             Ma: {
               coroa: () => {
                 Ma_semfim.innerHTML = (
                   modulo_semfim.value /
                   Math.cos(AngBeta_semfim.value * (Math.PI / 180))
                 ).toFixed(2)
               },
               parafuso: () => {
                 Ma2_semfim.innerHTML = (
                   modulo_semfim.value /
                   Math.sin(AngBeta_semfim.value * (Math.PI / 180))
                 ).toFixed(2)
               },
             },

             Pn: () => {
               Pn_semfim.innerHTML = (modulo_semfim.value * Math.PI).toFixed(2)
             },

             Ph: () => {
               Ph_semfim.innerHTML = (
                 (modulo_semfim.value /
                   Math.cos(AngBeta_semfim.value * (Math.PI / 180))) *
                 Math.PI *
                 N1_semfim.value
               ).toFixed(2)
             },

             Pa: () => {
               Pa1_semfim.innerHTML = (
                 (modulo_semfim.value /
                   Math.cos(AngBeta_semfim.value * (Math.PI / 180))) *
                 Math.PI
               ).toFixed(2)
             },

             a: () => {
               a_semfim.innerHTML = modulo_semfim.value
             },

             b: () => {
               b_semfim.innerHTML = (1.167 * modulo_semfim.value).toFixed(2)
             },

             h: () => {
               h_semfim.innerHTML = (
                 parseInt(modulo_semfim.value) +
                 1.167 * modulo_semfim.value
               ).toFixed(2)
             },

             l: () => {
               l_semfim.innerHTML = (0.167 * modulo_semfim.value).toFixed(2)
             },

             E: () => {
               E_semfim.innerHTML = (
                 (modulo_semfim.value * Math.PI) /
                 2
               ).toFixed(2)
             },

             Dc: () => {
               Dc_semfim.innerHTML = ((D2_semfim.value - 5) / 2).toFixed(2)
             },

             Cc: () => {
               Cc_semfim.innerHTML = (D2_semfim.value * 1.5).toFixed(2)
             },

             Db: () => {
               Db2_semfim.innerHTML = (
                 Dp2_semfim.innerHTML *
                 Math.cos(AngTeta_semfim.value * (Math.PI / 180))
               ).toFixed(2)
             },

             Dem: () => {
               Dem_semfim.innerHTML = (
                 parseInt(Dp2_semfim.innerHTML) +
                 3 * modulo_semfim.value
               ).toFixed(2)
             },

             Reg: () => {
               reg_semfim.innerHTML = (
                 I_semfim.innerHTML -
                 Di2_semfim.innerHTML / 2
               ).toFixed(2)
             },

             Rig: () => {
               rig_semfim.innerHTML = (
                 I_semfim.innerHTML -
                 De2_semfim.innerHTML / 2
               ).toFixed(2)
             },

             I: () => {
               I_semfim.innerHTML = (
                 (Mc1_semfim.innerHTML * N1_semfim.value +
                   Mc2_semfim.innerHTML * N2_semfim.value) /
                 2
               ).toFixed(2)
             },

             K: () => {
               K_semfim.innerHTML = (6.5 * modulo_semfim.value).toFixed(2)
             },

             G: () => {
               G_semfim.innerHTML = (
                 (modulo_semfim.value * Math.PI) /
                 2
               ).toFixed(2)
             },

             s: () => {
               s_semfim.innerHTML = (D2_semfim.value / 4).toFixed(2)
             },

             t: () => {
               t_semfim.innerHTML = (D2_semfim.value / 4 / 2).toFixed(2)
             },
           }

        reusltado_semfim.innerHTML = `
            <div class="tableFlex">  
                    <table>
                        <tbody>
                            <tr>
                                <td>FORMULAS</td>
                                <td>COROA</td>
                            </tr>
                            
                            <tr>
                                <td> Ma </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Mc </td>
                                <td >  mm </td>
                            </tr>
                            
                            
                            <tr>
                                <td> Dp </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> De </td>
                                <td >  mm </td>
                            </tr>
                            
                            
                            <tr>
                                <td> Di </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Pc </td>
                                <td >  mm </td>
                            </tr>

                            <tr>
                                <td> Pn </td>
                                <td >  mm </td>
                            </tr>

                            <tr>
                                <td> Pa </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Ph </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Altura da Cabeça do dente </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> L1 </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> b </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> h </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> e </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> E </td>
                                <td >  mm </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <tbody>
                            <tr>
                                <td>FORMULAS</td>
                                <td>PARAFUSO</td>
                            </tr>
                            
                            <tr>
                                <td> Modulo axial </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Modulo circunferencial </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Diametro Primitivo </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Diametro Externo </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Diametro Interno </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Db </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Dem </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Dc </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Cc </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> L2 </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> L3 </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> reg </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> rig </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> Pc </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> K </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> G </td>
                                <td >  mm </td>
                            </tr>
                            
                            
                            <tr>
                                <td> I </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> s </td>
                                <td >  mm </td>
                            </tr>
                            
                            <tr>
                                <td> t </td>
                                <td >  mm </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        `

        statusSemfim.style.display = "inline-block"
      
    }else{
        mensagem()
    }
  }