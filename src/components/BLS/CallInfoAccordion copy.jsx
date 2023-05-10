// /* eslint-disable */
// import React, { useState, useContext, useEffect, useRef ,Fragment} from 'react'

// import { UserContext } from './Home';

// import hTabs from './hTabs.module.css'

// import { formControlClasses } from '@mui/material';

// export default function CallInfoAccordion({
//   activityId,
//   accountId,
//   objFP,
//   indexFromParent,
//   valCont,
//   addNewContactRow,
//   indexCont
// }) {
//   const [SupplierName, setSupplierName] = useState('')
//   const [ProductFamily, setProductFamily] = useState('')
//   const [ItemGroup, setItemGroup] = useState('')

//   const [supplierId, setSupplierId] = useState(0)
//   const [productFamilyId, setproductFamilyId] = useState(0)
//   const [ItemGroupId, setItemGroupId] = useState(0)
//   const [objectiveId, setObjectiveId] = useState(0)
//   const [statusId, setStatusId] = useState(0)
//   const [callProductId, setCallProductId] = useState(0)
//   const [callProductIdSet, setCallProductIdSet] = useState(0)

//   const [contactPerson, setContactPerson] = useState('')
//   const [mobileNumber, setMobileNumber] = useState('')
//   const [authorityId, setAuthorityId] = useState(0)
//   const [specialityId, setSpecialityId] = useState(0)
//   const [positionId, setPositionId] = useState(0)

//   const [contactCount, setcontactCount] = useState(0)

//   const [accountArea, setAccountArea] = useState('')
//   const [displayAccountsData, setDisplayAccountsData] = useState(hTabs.hideActivityData)
//   const [val, setVal] = useState([
//     valCont

//   ])

//   const [valP, setValP] = useState(
//     objFP

//   )

//   let [xCount,setXcount] = useState(0)
//   const userData = useContext(UserContext)
//   const key = userData.bl1_id
//   useEffect(() => {
//     const fetchData = async () => {
//       await fetch('http://https://backend-ahmed-shehata-crm.onrender.com/api/suppliers/names/' + key, {
//         method: 'GET',
//         headers: new Headers({
//           Authorization: 'bearer ' + userData.token,
//           'Content-Type': 'application/x-www-form-urlencoded'
//         })
//       }).then(async (response) => {
//         const newData = await response.json()
//         setSupplierName(newData)
//       })
//     }
//     fetchData()

//   }, [])

//   const supplieronChangeHandler = (event, _index) => {
//     const supKey = event.target.value
//     setSupplierId(supKey)
//     //console.log(supKey)
//     const pFresponse = async () => {
//       fetch('http://https://backend-ahmed-shehata-crm.onrender.com/api/product_families/names/' + supKey, {
//         method: 'GET',
//         headers: new Headers({
//           Authorization: 'bearer ' + userData.token,
//           'Content-Type': 'application/x-www-form-urlencoded'
//         })
//       }).then(async (pFresponse) => {
//         const newPFData = await pFresponse.json()
//         setProductFamily(newPFData)

//       })

//     }
//     pFresponse()
//   }

//   const ProductFamilyOnCahngeHandler = (event, index) => {
//     const pFKey = event.target.value
//     setproductFamilyId(pFKey)

//     const iGresponse = async () => {
//       fetch('http://https://backend-ahmed-shehata-crm.onrender.com/api/item_groups/names/' + pFKey, {
//         method: 'GET',
//         headers: new Headers({
//           Authorization: 'bearer ' + userData.token,
//           'Content-Type': 'application/x-www-form-urlencoded'
//         })
//       }).then(async (iGResponse) => {
//         const newiGData = await iGResponse.json()
//         setItemGroup(newiGData)

//       })

//     }
//     iGresponse()
//   }

//   const handleFormChangeProductCall = (event
//     // , index
//   ) => {
//     console.log(event.target.name)

//     if (event.target.name === 'supplier' && indexFromParent === 0) {

//             supplieronChangeHandler(event)
//         let dataP = [...valP]
//         dataP[0]['supplier'] = event.target.value
//     }
//     if (event.target.name === 'supplier' && indexFromParent === 1){
//       supplieronChangeHandler(event)
//       let dataP = [...valP]
//       dataP[1]['supplier'] = event.target.value
//     }
//     if (event.target.name === 'supplier' && indexFromParent === 2){
//         supplieronChangeHandler(event)
//         let dataP = [...valP]
//         dataP[2]['supplier'] = event.target.value
//       }
//       if (event.target.name === 'supplier' && indexFromParent === 3){
//           supplieronChangeHandler(event)
//           let dataP = [...valP]
//           dataP[3]['supplier'] = event.target.value
//         }
//         if (event.target.name === 'supplier' && indexFromParent === 4){
//             supplieronChangeHandler(event)
//             let dataP = [...valP]
//             dataP[4]['supplier'] = event.target.value
//           }
//           if (event.target.name === 'supplier' && indexFromParent === 5){
//               supplieronChangeHandler(event)
//               let dataP = [...valP]
//               dataP[5]['supplier'] = event.target.value
//             }
//             if (event.target.name === 'supplier' && indexFromParent === 6){
//                 supplieronChangeHandler(event)
//                 let dataP = [...valP]
//                 dataP[6]['supplier'] = event.target.value
//               }
//               if (event.target.name === 'supplier' && indexFromParent === 7){
//                   supplieronChangeHandler(event)
//                   let dataP = [...valP]
//                   dataP[7]['supplier'] = event.target.value
//                 }
//                 if (event.target.name === 'supplier' && indexFromParent === 8){
//                     supplieronChangeHandler(event)
//                     let dataP = [...valP]
//                     dataP[8]['supplier'] = event.target.value
//                   }
//                   if (event.target.name === 'supplier' && indexFromParent === 9){
//                       supplieronChangeHandler(event)
//                       let dataP = [...valP]
//                       dataP[9]['supplier'] = event.target.value
//                     }
//                     if (event.target.name === 'supplier' && indexFromParent === 10){
//                         supplieronChangeHandler(event)
//                         let dataP = [...valP]
//                         dataP[10]['supplier'] = event.target.value

//     } else if (event.target.name === 'productFamily') {
//       ProductFamilyOnCahngeHandler(event)
//       let dataP = [...valP]
//       dataP[index]['productFamily'] = event.target.value
//       setValP(dataP)

//     } else if (event.target.name === 'itemGroup') {
//       let dataP = [...valP]
//       dataP[index]['itemGroup'] = event.target.value
//       setValP(dataP)
//       //console.log('item group name from event target invokded successfuly')
//     } else if (event.target.name === 'callObjective') {
//       let dataP = [...valP]
//       dataP[index]['callObjective'] = event.target.value
//       setValP(dataP)
//     } else if (event.target.name === 'callStatus') {
//       let dataP = [...valP]
//       dataP[index]['callStatus'] = event.target.value
//       setValP(dataP)
//     } else if (event.target.name === 'contactPerson') {
//       //console.log('contact person is changing')
//       let dataC = [...valP]
//       dataC[index]['contData'][indexC]['contactPerson'] = event.target.value
//       setValP(dataC)
//     } else if (event.target.name === 'mobileNumber') {
//       let dataC = [...valP]
//       dataC[index]['contData'][indexC]['mobileNumber'] = event.target.value
//       setValP(dataC)
//     } else if (event.target.name === 'authority') {
//       let dataC = [...valP]
//       dataC[index]['contData'][indexC]['authority'] = event.target.value
//       setValP(dataC)
//     } else if (event.target.name === 'speciality') {
//       let dataC = [...valP]
//       dataC[index]['contData'][indexC]['speciality'] = event.target.value
//       setValP(dataC)
//     } else if (event.target.name === 'position') {
//       let dataC = [...valP]
//       dataC[index]['contData'][indexC]['position'] = event.target.value
//       setValP(dataC)
//     }

//   }

//   const saveBtnHandler = async (e) => {
//     e.preventDefault()

//     valP.map((objP, index) => {
//       const postCallProductData = {
//         supplier_id: objP.supplier,
//         product_family_id: objP.productFamily,
//         item_group_id: objP.itemGroup,
//         objective_id: objP.callObjective,
//         status_id: objP.callStatus,
//         activity_id: activityId
//       }

//       const res = fetch('http://https://backend-ahmed-shehata-crm.onrender.com/api/call_products', {
//         method: 'post',
//         headers: new Headers({
//           Authorization: 'bearer ' + userData.token,
//           'Content-Type': 'application/json'
//         }),
//         body: JSON.stringify(postCallProductData)

//       }).then(async (response) => {
//         const res = await response.json()

//         val.map((obj, index) => {

//           const postContactData = {
//             contact_person: obj.contactPerson,
//             mobile_number: obj.mobileNumber,
//             authority_id: obj.authority,
//             speciality_id: obj.speciality,
//             position_id: obj.position,
//             call_product_id: res.data.id,
//             activity_id: activityId,
//             account_id: accountId
//           }

//           const postCallContact = () => {
//             fetch('http://https://backend-ahmed-shehata-crm.onrender.com/api/call_contacts', {
//               method: 'post',
//               headers: new Headers({
//                 Authorization: 'bearer ' + userData.token,
//                 'Content-Type': 'application/json'
//               }),
//               body: JSON.stringify(postContactData)

//             }).then(async (response) => {
//               const res = await response.json()
//               try {

//               } catch (err) {

//               }
//             })
//           }
//           postCallContact()
//           //
//         })
//         //
//       })

//     })
//     //
//   }

//  const addContactBtn = (event) => {

//   event.preventDefault()
//   setXcount(xCount++)
//   console.log("XCount out of IF is :",xCount)
//         let NewContactCallRow = { contactPerson: '', mobileNumber: '', authority: '', speciality: '', position: '' }

//         // valP.indexOf(valP[0]) === 0
//         // valP.length === 1
//         if(valP.indexOf(valP[0]) === 0 && xCount === 1  && val.length === 1 && valP[0]['contData'].length === 2){
//           console.log('val length is :',val.length)
//           console.log('contData length is :',valP[0]['contData'].length)
//           console.log('Xcount is :',xCount)
//           console.log("I added 1 val only")
//           let deleteVal = valP[0]['contData']
//            deleteVal.splice(0,1)
//            valP[0]['contData'].push(NewContactCallRow)
//            setXcount(xCount)
//            console.log("XCount in first IF is :",xCount)
//            setVal([...val, NewContactCallRow])

//           }else if(valP.indexOf(valP[0]) === 0 && xCount === 2  && val.length === 2 && valP[0]['contData'].length === 2){
//             console.log('val length is :',val.length)
//             console.log('contData length is :',valP[0]['contData'].length)
//             console.log('Xcount is :',xCount)
//             console.log("I added 2 val only")
//             // let deleteVal = valP[0]['contData']
//             //  deleteVal.splice(0,1)
//              valP[0]['contData'].push(NewContactCallRow)
//              setXcount(xCount)
//              console.log("XCount in first IF is :",xCount)
//              setVal([...val, NewContactCallRow])

//             }else if(valP.indexOf(valP[0]) === 0 && xCount === 3  && val.length === 3 && valP[0]['contData'].length === 3){
//               console.log('val length is :',val.length)
//               console.log('contData length is :',valP[0]['contData'].length)
//               console.log('Xcount is :',xCount)
//               console.log("I added 3 val only")
//               // let deleteVal = valP[0]['contData']
//               //  deleteVal.splice(0,1)
//                valP[0]['contData'].push(NewContactCallRow)
//                setXcount(xCount)
//                console.log("XCount in first IF is :",xCount)
//                setVal([...val, NewContactCallRow])

//               }else if(valP.indexOf(valP[0]) === 0 && xCount === 4  && val.length === 4 && valP[0]['contData'].length === 4){
//                 console.log('val length is :',val.length)
//                 console.log('contData length is :',valP[0]['contData'].length)
//                 console.log('Xcount is :',xCount)
//                 console.log("I added 4 val only")
//                 // let deleteVal = valP[0]['contData']
//                 //  deleteVal.splice(0,1)
//                  valP[0]['contData'].push(NewContactCallRow)
//                  setXcount(xCount)
//                  console.log("XCount in first IF is :",xCount)
//                  setVal([...val, NewContactCallRow])

//                 }else if(valP.indexOf(valP[0]) === 0 && xCount === 5  && val.length === 5 && valP[0]['contData'].length === 5){
//                   console.log('val length is :',val.length)
//                   console.log('contData length is :',valP[0]['contData'].length)
//                   console.log('Xcount is :',xCount)
//                   console.log("I added 5 val only")
//                   // let deleteVal = valP[0]['contData']
//                   //  deleteVal.splice(0,1)
//                    valP[0]['contData'].push(NewContactCallRow)
//                    setXcount(xCount)
//                    console.log("XCount in first IF is :",xCount)
//                    setVal([...val, NewContactCallRow])

//                   }else if(valP.indexOf(valP[0]) === 0 && xCount === 6  && val.length === 6 && valP[0]['contData'].length === 6){
//                     console.log('val length is :',val.length)
//                     console.log('contData length is :',valP[0]['contData'].length)
//                     console.log('Xcount is :',xCount)
//                     console.log("I added 6 val only")
//                     // let deleteVal = valP[0]['contData']
//                     //  deleteVal.splice(0,1)
//                      valP[0]['contData'].push(NewContactCallRow)
//                      setXcount(xCount)
//                      console.log("XCount in first IF is :",xCount)
//                      setVal([...val, NewContactCallRow])

//                     }else if(valP.indexOf(valP[0]) === 0 && xCount === 7  && val.length === 7 && valP[0]['contData'].length === 7){
//                       console.log('val length is :',val.length)
//                       console.log('contData length is :',valP[0]['contData'].length)
//                       console.log('Xcount is :',xCount)
//                       console.log("I added 7 val only")
//                       // let deleteVal = valP[0]['contData']
//                       //  deleteVal.splice(0,1)
//                        valP[0]['contData'].push(NewContactCallRow)
//                        setXcount(xCount)
//                        console.log("XCount in first IF is :",xCount)
//                        setVal([...val, NewContactCallRow])

//                       }else if(valP.indexOf(valP[0]) === 0 && xCount === 8  && val.length === 8 && valP[0]['contData'].length === 8){
//                         console.log('val length is :',val.length)
//                         console.log('contData length is :',valP[0]['contData'].length)
//                         console.log('Xcount is :',xCount)
//                         console.log("I added 8 val only")
//                         // let deleteVal = valP[0]['contData']
//                         //  deleteVal.splice(0,1)
//                          valP[0]['contData'].push(NewContactCallRow)
//                          setXcount(xCount)
//                          console.log("XCount in first IF is :",xCount)
//                          setVal([...val, NewContactCallRow])

//                         }else if(valP.indexOf(valP[0]) === 0 && xCount === 9  && val.length === 9 && valP[0]['contData'].length === 9){
//                           console.log('val length is :',val.length)
//                           console.log('contData length is :',valP[0]['contData'].length)
//                           console.log('Xcount is :',xCount)
//                           console.log("I added 9 val only")
//                           // let deleteVal = valP[0]['contData']
//                           //  deleteVal.splice(0,1)
//                            valP[0]['contData'].push(NewContactCallRow)
//                            setXcount(xCount)
//                            console.log("XCount in first IF is :",xCount)
//                            setVal([...val, NewContactCallRow])

//                         }else if(valP.indexOf(valP[1]) === 1 && xCount === 1  && val.length === 1 && valP[1]['contData'].length === 2){
//                             console.log('val length is :',val.length)
//                             console.log('contData length in valP[1] is :',valP[1]['contData'].length)
//                             console.log('Xcount is :',xCount)
//                             console.log("I added 1 val only in valP[1]")
//                             // let deleteVal = valP[0]['contData']
//                             //  deleteVal.splice(0,1)
//                              valP[1]['contData'].push(NewContactCallRow)
//                              setXcount(xCount)
//                              console.log("XCount in first IF is :",xCount)
//                              setVal([...val, NewContactCallRow])

//                             }else if(valP.indexOf(valP[1]) === 1 && xCount === 2  && val.length === 2 && valP[1]['contData'].length === 2){
//                               console.log('val length is :',val.length)
//                               console.log('contData length is :',valP[1]['contData'].length)
//                               console.log('Xcount is :',xCount)
//                               console.log("I added 2 val only in valP[1]")
//                               // let deleteVal = valP[0]['contData']
//                               //  deleteVal.splice(0,1)
//                                valP[1]['contData'].push(NewContactCallRow)
//                                setXcount(xCount)
//                                console.log("XCount in first IF is :",xCount)
//                                setVal([...val, NewContactCallRow])

//                               }else if(valP.indexOf(valP[1]) === 1 && xCount === 3  && val.length === 3 && valP[1]['contData'].length === 3){
//                                 console.log('val length is :',val.length)
//                                 console.log('contData length is :',valP[1]['contData'].length)
//                                 console.log('Xcount is :',xCount)
//                                 console.log("I added 3 val only in valP[1]")
//                                 // let deleteVal = valP[0]['contData']
//                                 //  deleteVal.splice(0,1)
//                                  valP[1]['contData'].push(NewContactCallRow)
//                                  setXcount(xCount)
//                                  console.log("XCount in first IF is :",xCount)
//                                  setVal([...val, NewContactCallRow])

//                                 }else if(valP.indexOf(valP[1]) === 1 && xCount === 4  && val.length === 4 && valP[1]['contData'].length === 4){
//                                   console.log('val length is :',val.length)
//                                   console.log('contData length is :',valP[1]['contData'].length)
//                                   console.log('Xcount is :',xCount)
//                                   console.log("I added 4 val only in valP[1]")
//                                   // let deleteVal = valP[0]['contData']
//                                   //  deleteVal.splice(0,1)
//                                    valP[1]['contData'].push(NewContactCallRow)
//                                    setXcount(xCount)
//                                    console.log("XCount in first IF is :",xCount)
//                                    setVal([...val, NewContactCallRow])

//                                   }else if(valP.indexOf(valP[1]) === 1 && xCount === 5  && val.length === 5 && valP[1]['contData'].length === 5){
//                                     console.log('val length is :',val.length)
//                                     console.log('contData length is :',valP[1]['contData'].length)
//                                     console.log('Xcount is :',xCount)
//                                     console.log("I added 5 val only in valP[1]")
//                                     // let deleteVal = valP[0]['contData']
//                                     //  deleteVal.splice(0,1)
//                                      valP[1]['contData'].push(NewContactCallRow)
//                                      setXcount(xCount)
//                                      console.log("XCount in first IF is :",xCount)
//                                      setVal([...val, NewContactCallRow])

//                                     }else if(valP.indexOf(valP[1]) === 1 && xCount === 6  && val.length === 6 && valP[1]['contData'].length === 6){
//                                       console.log('val length is :',val.length)
//                                       console.log('contData length is :',valP[1]['contData'].length)
//                                       console.log('Xcount is :',xCount)
//                                       console.log("I added 6 val only in valP[1]")
//                                       // let deleteVal = valP[0]['contData']
//                                       //  deleteVal.splice(0,1)
//                                        valP[1]['contData'].push(NewContactCallRow)
//                                        setXcount(xCount)
//                                        console.log("XCount in first IF is :",xCount)
//                                        setVal([...val, NewContactCallRow])

//                                       }else if(valP.indexOf(valP[1]) === 1 && xCount === 7  && val.length === 7 && valP[1]['contData'].length === 7){
//                                         console.log('val length is :',val.length)
//                                         console.log('contData length is :',valP[1]['contData'].length)
//                                         console.log('Xcount is :',xCount)
//                                         console.log("I added 7 val only in valP[1]")
//                                         // let deleteVal = valP[0]['contData']
//                                         //  deleteVal.splice(0,1)
//                                          valP[1]['contData'].push(NewContactCallRow)
//                                          setXcount(xCount)
//                                          console.log("XCount in first IF is :",xCount)
//                                          setVal([...val, NewContactCallRow])

//                                         }else if(valP.indexOf(valP[1]) === 1 && xCount === 8  && val.length === 8 && valP[1]['contData'].length === 8){
//                                           console.log('val length is :',val.length)
//                                           console.log('contData length is :',valP[1]['contData'].length)
//                                           console.log('Xcount is :',xCount)
//                                           console.log("I added 8 val only in valP[1]")
//                                           // let deleteVal = valP[0]['contData']
//                                           //  deleteVal.splice(0,1)
//                                            valP[1]['contData'].push(NewContactCallRow)
//                                            setXcount(xCount)
//                                            console.log("XCount in first IF is :",xCount)
//                                            setVal([...val, NewContactCallRow])

//                                           }else if(valP.indexOf(valP[1]) === 1 && xCount === 9  && val.length === 9 && valP[1]['contData'].length === 9){
//                                             console.log('val length is :',val.length)
//                                             console.log('contData length is :',valP[1]['contData'].length)
//                                             console.log('Xcount is :',xCount)
//                                             console.log("I added 9 val only in valP[1]")
//                                             // let deleteVal = valP[0]['contData']
//                                             //  deleteVal.splice(0,1)
//                                              valP[1]['contData'].push(NewContactCallRow)
//                                              setXcount(xCount)
//                                              console.log("XCount in first IF is :",xCount)
//                                              setVal([...val, NewContactCallRow])

//           }

//         console.log('valP after Adding contcat is ................:' ,valP)
//           }

// const deleteContactBtn = (i) => {
//   i.preventDefault()

//   let deleteVal = [...val]
//   deleteVal.splice((val.length-1),1)
//   if(val.length > 1){
//     setVal(deleteVal)
//   }
// }
//   return (
//     <Fragment>

//       <form
//         onSubmit={saveBtnHandler}
//         // method="post"
//         // action="/"
//         id="CallInfoAccordion"
//       >
//         <div
//           key={indexFromParent}

//           role="tabpanel"

//         >
//           <label className={hTabs.CallLable}>Product Details</label>
//           <div className={hTabs.productBox}>
//             <label className={hTabs.minLable}>Supplier</label>
//             <select
//               name="supplier"
//               data-name="supplier"
//               value={valP.supplier}
//               className={hTabs.productBoxSelect}
//               onChange={(event) => handleFormChangeProductCall(event)}

//             >
//               <option value="0" hidden>
//                 Select Supplier
//               </option>
//               {SupplierName &&
//                 SupplierName.length > 0 &&
//                 SupplierName.map((userObj, index) => (
//                   <option value={userObj.id} key={userObj.id}>
//                     {userObj.supplier_name}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <div className={hTabs.productBox}>
//             <label className={hTabs.minLable}>Product Family</label>
//             <select
//               className={hTabs.productBoxSelect}
//               name="productFamily"
//               value={valP.productFamily}

//               onChange={(event) => handleFormChangeProductCall( event)}
//             >
//               <option value="0" hidden>
//                 Select Family
//               </option>
//               {ProductFamily &&
//                 ProductFamily.length > 0 &&
//                 ProductFamily.map((userObj, index) => (
//                   <option value={userObj.id} key={userObj.id}>
//                     {userObj.product_family}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <div className={hTabs.productBox}>
//             <label className={hTabs.minLable}>Item Group</label>
//             <select
//               className={hTabs.productBoxSelect}
//               name="itemGroup"
//               value={valP.itemGroup}

//               onChange={(event) => handleFormChangeProductCall(event,indexFromParent)}
//             >
//               <option value="0" hidden>
//                 Select Item
//               </option>
//               {ItemGroup &&
//                 ItemGroup.length > 0 &&
//                 ItemGroup.map((userObj, index) => (
//                   <option value={userObj.id} key={userObj.id}>
//                     {userObj.item_group}
//                   </option>
//                 ))}
//             </select>
//           </div>
//           <div className={hTabs.productBox}>
//             <label className={hTabs.minLable}>Call Objective</label>
//             <select
//               className={hTabs.productBoxSelect}
//               name="callObjective"
//               value={valP.callObjective}

//               onChange={(event) => handleFormChangeProductCall(event,indexFromParent)}
//             >
//               <option value="0" disabled selected hidden>
//                 Select Objective
//               </option>
//               <option value="1">Product Introduction</option>
//               <option value="2">Product Upgrade</option>
//               <option value="3">Product Retention</option>
//               <option value="4">Product Conversion</option>
//               <option value="5">Product Demonstration</option>
//               <option value="6">Repair/Exchange</option>
//               <option value="7">Tray Audit</option>
//               <option value="8">Tender Specs</option>
//               <option value="9">Submit Offer</option>
//             </select>
//           </div>
//           <div className={hTabs.productBox}>
//             <label className={hTabs.minLable}>Call Status</label>
//             <select
//               className={hTabs.productBoxSelect}
//               name="callStatus"
//               value={valP.callStatus}

//               onChange={(event) => handleFormChangeProductCall(event,indexFromParent)}
//             >
//               <option value="0" disabled selected hidden>
//                 Select Status
//               </option>
//               <option value="1">New Opportunity</option>
//               <option value="2">Current Opportunity</option>
//               <option value="3">Pending Opportunity</option>
//               <option value="4">Won</option>
//               <option value="5">Lost</option>
//             </select>
//           </div>

//           <label className={hTabs.CallLable}>Customer Information</label>

//           {val.map((data, index) => {

//             return (
//               <div key={index}>

//                       <div className={hTabs.productBox}>
//                         <label className={hTabs.minLable}>Contact person</label>
//                         <input
//                           name="contactPerson"
//                           value={data && data.contactPerson}

//                           onChange={(event) =>
//                             handleFormChangeProductCall(index, event)
//                           }
//                           type="text"
//                           className={hTabs.productBoxSelect}
//                         ></input>
//                       </div>

//                       <div className={hTabs.productBox}>
//                         <label className={hTabs.minLable}>Mobile Number</label>
//                         <input
//                           name="mobileNumber"
//                           value={data && data.mobileNumber}

//                           onChange={(event) =>
//                             handleFormChangeProductCall(index, event)
//                           }
//                           type="number"
//                           className={hTabs.productBoxSelect}
//                         ></input>
//                       </div>

//                       <div className={hTabs.productBox}>
//                         <label className={hTabs.minLable}>Authority</label>
//                         <select
//                           name="authority"
//                           value={data && data.authority}

//                           onChange={(event) =>
//                             handleFormChangeProductCall(index, event)
//                           }
//                           className={hTabs.productBoxSelect}
//                         >
//                           <option value="0" hidden>
//                             Select Authority
//                           </option>
//                           <option value="1">Decision Maker</option>
//                           <option value="2">Influencer</option>
//                           <option value="3">User</option>
//                         </select>
//                       </div>

//                       <div className={hTabs.productBox}>
//                         <label className={hTabs.minLable}>Speciality</label>
//                         <select
//                           name="speciality"
//                           value={data && data.speciality}

//                           onChange={(event) =>
//                             handleFormChangeProductCall(index, event)
//                           }
//                           className={hTabs.productBoxSelect}
//                         >
//                           <option value="0" hidden>
//                             Select Speciality
//                           </option>
//                           <option value="1">Andrology</option>
//                           <option value="2">Anesthesia</option>
//                           <option value="3">Bariatric Surgery</option>
//                           <option value="4">Burn Centers</option>
//                           <option value="5">Cardiology</option>
//                           <option value="6">Cardiothoracic</option>
//                           <option value="7">Chest</option>
//                           <option value="8">Clinical Pathology</option>
//                           <option value="9">Dental Surgery</option>
//                           <option value="10">Endocrinology</option>
//                           <option value="11">ENT</option>
//                           <option value="12">ER</option>
//                           <option value="13">General Surgery</option>
//                           <option value="14">GIT</option>
//                           <option value="15">Gynecology</option>
//                           <option value="16">ICU</option>
//                           <option value="17">Infection Control</option>
//                           <option value="18">Insurance</option>
//                           <option value="19">Internal Medicine</option>
//                           <option value="20">Liver Surgery</option>
//                           <option value="21">Maintenance</option>
//                           <option value="22">Neonatal ICU</option>
//                           <option value="23">Neurology</option>
//                           <option value="24">Neurosurgery</option>
//                           <option value="25">Nurse</option>
//                           <option value="26">Oncology</option>
//                           <option value="27">Ophthalmology</option>
//                           <option value="28">Orthopedic</option>
//                           <option value="29">Pharmacist</option>
//                           <option value="30">Plastic Surgery</option>
//                           <option value="31">Purchaser</option>
//                           <option value="32">Spine Surgery</option>
//                           <option value="33">Technician</option>
//                           <option value="34">Transplant</option>
//                           <option value="35">Urology</option>
//                           <option value="36">Vascular</option>
//                           <option value="37">Warehouse</option>
//                           <option value="38">Category Manager</option>
//                           <option value="39">Assistant</option>
//                         </select>
//                       </div>

//                       <div className={hTabs.productBox}>
//                         <label className={hTabs.minLable}>Position</label>
//                         <select
//                           name="position"
//                           value={data && data.position}

//                           onChange={(event) =>
//                             handleFormChangeProductCall(index, event)
//                           }
//                           className={hTabs.productBoxSelect}
//                         >
//                           <option value="0" hidden>
//                             Select Position
//                           </option>
//                           <option value="1">Head Nurse</option>
//                           <option value="2">Head of Warehouse</option>
//                           <option value="3">Head of Department</option>
//                           <option value="4">Head of Operation Room</option>
//                           <option value="5">Head of Procurement</option>
//                           <option value="6">Hospital Director</option>
//                           <option value="7">Head of Maintenance</option>
//                           <option value="8">BB Manager</option>
//                           <option value="9">Others</option>
//                         </select>
//                       </div>

//               </div>
//             )

//           })}

// <div className={hTabs.callButtons}>
//                         <button
//                           key={indexFromParent}
//                           className={hTabs.addBtn}
//                           id="addContact0"
//                           onClick={addContactBtn}
//                         >
//                           Add Contact
//                         </button>

//                         <button
//                           className={hTabs.deleteBtn}
//                           id="deleteContact0"
//                           onClick={deleteContactBtn}
//                         >
//                           Delete Contact
//                         </button>

//                         <button className={hTabs.addBtn} id="SaveActivity" onClick={saveBtnHandler}>
//                           Save
//                         </button>

//                       </div>

//         </div>
//       </form>

//     </Fragment>
//   )
// }
