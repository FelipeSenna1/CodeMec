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

            const Dentes = {
                diametroExterno: {
                    coroa: (modulo_dentes.value * (Number(N1_dentes.value) + 2)).toFixed(2),
                    pinhao: (modulo_dentes.value * (Number(N2_dentes.value) + 2)).toFixed(2)
                },
                
                diametroPrimitivo: {
                    coroa: (modulo_dentes.value * N1_dentes.value).toFixed(2),
                    pinhao: (modulo_dentes.value * N2_dentes.value).toFixed(2) 
                },

                diametroInterno: {
                    coroa: (DiaExterno1_dentes.innerHTML - (2 * (2.16 * modulo_dentes.value))).toFixed(2),
                    pinhao: (DiaExterno2_dentes.innerHTML - (2 * (2.16 * modulo_dentes.value))).toFixed(2) 
                },

                diametroBase: {
                    coroa: (DiaPrimitivo1_dentes.innerHTML * angulo_dentes.value).toFixed(2),
                    pinhao: (DiaPrimitivo2_dentes.innerHTML * angulo_dentes.value).toFixed(2) 
                },

                comprimentoCubo: {
                    coroa: (2 * D1_dentes.value).toFixed(2),
                    pinhao: (2 * D2_dentes.value).toFixed(2)
                }, 

                diametroCubo: {
                    coroa: (2 * D1_dentes.value).toFixed(2),
                    pinhao: (2 * D2_dentes.value).toFixed(2) 
                },
                
                folgaDente: (0.16 * modulo_dentes.value).toFixed(2),

                distanciaCentros: ((modulo_dentes.value * (Number(N1_dentes.value) + Number(N2_dentes.value))) / 2).toFixed(2),

                passo: (modulo_dentes.value * Math.PI).toFixed(2),
            
                reforco: (Passo_dentes.innerHTML/2).toFixed(2),
            
                corpoRoda: (formulas.Dentes.comprimentoDente() * 0.6).toFixed(2),
            
                comprimentoDente: (8 * modulo_dentes.value).toFixed(2),
            
                alturaDente: (2.16 * modulo_dentes.value).toFixed(2),
        
                expessura: (Passo_dentes.innerHTML / 2).toFixed(2),
            }
            
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
                                <td > ${Dentes.diametroExterno.coroa} mm </td>
                                <td > ${Dentes.diametroExterno.pinhao} mm </td>
                            </tr>
                            <tr>
                                <td>Diametro primitivo :</td>
                                <td > ${Dentes.diametroPrimitivo.coroa} mm </td>
                                <td > ${Dentes.diametroPrimitivo.pinhao} mm </td>
                            </tr>
                            <tr>
                                <td>Diametro interno :</td>
                                <td > ${Dentes.diametroInterno.coroa} mm </td>
                                <td > ${Dentes.comprimentoCubo} mm </td>
                            </tr>
                            <tr>
                                <td>Diametro de base :</td>
                                <td > ${Dentes.diametroBase.coroa} mm </td>
                                <td > ${Dentes.diametroBase.pinhao} mm </td>
                            </tr>
                            <tr>
                                <td>Diametro do cubo :</td>
                                <td > ${Dentes.diametroCubo.coroa} mm </td>
                                <td > ${Dentes.diametroCubo.pinhao} mm </td>
                            </tr>
                            <tr>
                                <td>Comprimento do cubo :</td>
                                <td > ${Dentes.comprimentoCubo.coroa} mm </td>
                                <td > ${Dentes.comprimentoCubo.pinhao} mm </td>
                            </tr>
                            <tr>
                                <td><hr></td>
                                <td><hr></td>
                                <td><hr></td>
                            </tr>
                            
                            <tr>
                                <td>Folga no pé do dente :</td>
                                <td > ${Dentes.folgaDente} mm </td>
                            </tr>
                            <tr>
                                <td>Altura do dente:</td>
                                <td > ${Dentes.alturaDente} mm </td>
                            </tr>
                            <tr>
                                <td>Reforço (G) :</td>
                                <td > ${Dentes.reforco} mm </td>
                            </tr>
                            <tr>
                                <td>Comprimento do Dente :</td>
                                <td > ${Dentes.comprimentoDente} mm </td>
                            </tr>
                            <tr>
                                <td>Corpo da Roda :</td>
                            </tr>
                                <td > ${Dentes.corpoRoda} mm </td>
                            <tr>
                                <td>Distancia entre Centros :</td>
                                <td > ${Dentes.distanciaCentros} mm </td>
                            </tr>
                            <tr>
                                <td>Espessura :</td> 
                                <td > ${Dentes.expessura} mm </td>
                            </tr>
                        </tbody>
                    </table>
            `
    
            statusDentes.style.display = 'inline-block'
                
        }else{
            mensagem()
        }
    }

  function calculoConica(){

    if((N1_conica.value != "") && (N2_conica.value != "") && (D1_conica.value != "") && (D2_conica.value != "") && (modulo_conica.value != "")) {


         const Conica = {
           diametroExterno: {
             coroa: () => {
               total = (
                 parseInt(Dp1.innerHTML) +
                 2 *
                   modulo_conica.value *
                   Math.cos(B_conica.innerHTML * (Math.PI / 180))
               ).toFixed(2)
               return total
             },
             pinhao: () => {
               total = (
                 parseInt(Dp2.innerHTML) +
                 2 *
                   modulo_conica.value *
                   Math.cos(B_conica.innerHTML * (Math.PI / 180))
               ).toFixed(2)
               return total
             },
           },

           diametroPrimitivo: {
             coroa: () => {
               DiaPrimitivo1_conica.innerHTML = (
                 N1_conica.value * modulo_conica.value
               ).toFixed(2)
             },
             pinhao: () => {
               DiaPrimitivo2_conica.innerHTML = (
                 N2_conica.value * modulo_conica.value
               ).toFixed(2)
             },
           },

           diametroCubo: {
             coroa: () => {
               DiaCubo1_conica.innerHTML = (2 * D1_conica.value).toFixed(2)
             },
             pinhao: () => {
               DiaCubo2_conica.innerHTML = (2 * D2_conica.value).toFixed(2)
             },
           },

           comprimentoCubo: {
             coroa: () => {
               CompCubo1_conica.innerHTML = (1.5 * D1_conica.value).toFixed(2)
             },
             pinhao: () => {
               CompCubo2_conica.innerHTML = (1.5 * D2_conica.value).toFixed(2)
             },
           },

           Y: {
             coroa: () => {
               const tgY1 = (modulo_conica.value / G1_conica.innerHTML).toFixed(
                 2
               )
               Y = Math.atan(tgY1) * (180 / Math.PI)

               Y1_conica.innerHTML = Y.toFixed(2)
             },

             pinhao: () => {
               const tgY2 = modulo_conica.value / G2_conica.innerHTML
               Ys = Math.atan(tgY2) * (180 / Math.PI)

               Y2_conica.innerHTML = Ys.toFixed(2)
             },
           },

           A: {
             coroa: () => {
               A1_conica.innerHTML = (
                 parseInt(Y1_conica.innerHTML) + parseInt(B_conica.innerHTML)
               ).toFixed(2)
             },
             pinhao: () => {
               A2_conica.innerHTML = (
                 parseInt(Y2_conica.innerHTML) + parseInt(B_conica.innerHTML)
               ).toFixed(2)
             },
           },

           G: {
             coroa: () => {
               G1_conica.innerHTML = (
                 (DiaPrimitivo2_conica.innerHTML / 2) *
                 Math.sin(B_conica.innerHTML * (Math.PI / 180))
               ).toFixed(2)
             },
             pinhao: () => {
               G2_conica.innerHTML = (
                 (DiaPrimitivo2_conica.innerHTML / 2) *
                 Math.sin(B_conica.innerHTML * (Math.PI / 180))
               ).toFixed(2)
             },
           },

           L: {
             coroa: () => {
               L1_conica.innerHTML = (G1_conica.innerHTML / 3).toFixed(2)
             },
             pinhao: () => {
               L2_conica.innerHTML = (G2_conica.innerHTML / 3).toFixed(2)
             },
           },

           chaveta: {
             coroa: () => {
               b1_conica.innerHTML = (0.25 * D1_conica.value).toFixed(2)
             },
             pinhao: () => {
               b2_conica.innerHTML = (0.25 * D2_conica.value).toFixed(2)
             },
           },

           B: () => {
             const divisao =
               parseInt(N1_conica.value) / parseInt(N2_conica.value)
             rad = Math.atan(divisao)
             deg = Math.atan(divisao) * (180 / Math.PI)

             B_conica.innerHTML = deg.toFixed(2)
           },

           Z: () => {
             const tgZ1 = (7 * modulo_conica.value) / (6 * G1_conica.innerHTML)
             Z1 = Math.atan(tgZ1) * (180 / Math.PI)

             Z_conica.innerHTML = Z1.toFixed(2)
           },

           C: () => {
             C_conica.innerHTML = (
               parseInt(B_conica.innerHTML) - parseInt(Z_conica.innerHTML)
             ).toFixed(2)
           },

           D: () => {
             D_conica.innerHTML = (90 - B_conica.innerHTML).toFixed(2)
           },

           H: () => {
             H_conica.innerHTML = (2.166 * modulo_conica.value).toFixed(2)
           },

           F: () => {
             FolgaDente_conica.innerHTML = (
               0.167 * modulo_conica.value
             ).toFixed(2)
           },

           W: () => {
             W_conica.innerHTML = (2.166 * modulo_conica.value * 1.25).toFixed(
               2
             )
           },

           E: () => {
             E_conica.innerHTML = (1.57 * modulo_conica.value).toFixed(2)
           },
         }

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
                            <td >  </span> mm </td>
                            <td >  </span> mm </td>
                        </tr>
            
                        <tr>
                            <td> Diametro Externo </td>
                            <td >  </span> mm </td>
                            <td >  </span> mm </td>
                        </tr>

                        <tr>
                            <td> Diametro do Cubo </td>
                            <td >  </span> mm </td>
                            <td >  </span> mm </td>
                        </tr>

                        <tr>
                            <td> Comprimento do Cubo </td>
                            <td >  </span> mm </td>
                            <td >  </span> mm </td>
                        </tr>

                        <tr>
                            <td> Y </td>
                            <td >  </span> mm </td>
                            <td >  </span> mm </td>
                        </tr>
                            
                        <tr>
                            <td> A </td>
                            <td >  </span> mm </td>
                            <td >  </span> mm </td>
                        </tr>

                        <tr>
                            <td> G </td>
                            <td >  </span> mm </td>
                            <td >  </span> mm </td>
                        </tr>

                        <tr>
                            <td> L </td>
                            <td >  </span> mm </td>
                            <td >  </span> mm </td>
                        </tr>

                        <tr>
                            <td> Chaveta </td>
                            <td >  </span> mm </td>
                            <td >  </span> mm </td>
                        </tr>

                        <tr>
                            <td><hr></td>
                            <td ><hr></td>
                            <td ><hr></td>
                        </tr>
            
                        <tr>
                            <td> B </td>
                            <td >  mm </td>
                        </tr>
            
                        <tr>
                            <td> Z </td>
                            <td >  mm </td>
                        </tr>
            
                        <tr>
                            <td> C </td>
                            <td >  mm </td>
                        </tr>
            
                        <tr>
                            <td> D </td>
                            <td >  mm </td>
                        </tr>
            
                        <tr>
                            <td> H </td>
                            <td >  mm </td>
                        </tr>
            
                        <tr>
                            <td> F </td>
                            <td >  mm </td>
                        </tr>
            
                        <tr>
                            <td> W </td>
                            <td >  mm </td>
                        </tr>
            
                        <tr>
                            <td> E </td>
                            <td >  mm </td>
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