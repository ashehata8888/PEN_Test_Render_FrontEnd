/* eslint-disable */

import React, { useEffect, useState, useContext } from 'react'
import hTabs from '../hTabs.module.css'
import { display } from '@mui/system';
import { styled } from '@mui/material/styles';
import { UserContext } from "../Home";



import { useSelector, useDispatch } from "react-redux";
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { updateSelectedItemGroup, updateMarketSize } from '../../../store/index';
import { alertClasses } from '@mui/material';

// import { updateSaveBtn} from "../../store";





const CheckCompetitor = ({ 

  // setUncheckedComp,
  inx,
  inxSizeRow,
  setInxSizeRow,
  inxRowId,
  setcompetitor_id,
  setRemoveUnCheck,
  setAddCheck,
  setInxRecoRow,
  setmarketSizeRecordsID ,
setegmed_consumption ,
settotal_consumption ,
setitem_qty1 ,
setitem_status1 ,
setitem_qty2 ,
setitem_status2 ,
setmarket_size_id ,
// setItemGroupId,
selectedItemGroup,
  
  currAddRow, checkBoxTitle, competitors, compInx, marketSizeObj, itemGroupP, saveBtn, rowInx , handelCallBackRow }) => {

  const [checked, setChecked] = useState(false);

  const [checked2, setChecked2] = useState(false);

  const [text2, setText2] = useState("");

  const [text, setText] = useState("");

  const [selected, setSelected] = useState(true);

  const [selected2, setSelected2] = useState(true);

  const [changeStatus2, setChangeStatus2] = useState(false)


  // const [egmed_consumption, setegmed_consumption] = useState(0)
  // const [total_consumption, settotal_consumption] = useState(0)
  // const [item_qty1 , setitem_qty1] = useState(0)
  const [item_status1, setitem_statusC1] = useState(0)
  // const [item_qty2 , setitem_qty2] = useState(0)
  const [item_status2, setitem_statusC2] = useState(0)
  // const [market_size_id, setmarket_size_id] = useState(0)
  const [competitorName, setCompetitorName] = useState(0)
  const [itemGroupC, setItemGroupC] = useState(0)
  const [finalObj, setFinalObj] = useState({})
  const [finalArray, setFinalArray] = ([])

  const [ marketSize, setMarketSize] = useState(
    [{
        marketSizeRowID: 0,
        supplier_id: 0,
        product_family_id: 0,
        item_group_id: 0,
        market_potential_id: 0,
        marketSizeRecords: [
          {
            marketSizeRecordsID: 0,
            egmed_consumption: 0,
            total_consumption: 0,
            competitor_id: 0,
            item_qty1: 0,
            item_status1: 0,
            item_qty2: 0,
            item_status2: 0,
            market_size_id: 0,
          },
        ],
      }]
  )

  const [currAddRow1, setCurrAddRow] = useState(0)


  const [uncheckedComp, setUncheckedComp] = useState(0)

  const [ unCheckItemGroup , setUnCheckItemGroup] = useState(0)
 

  const globalState = useSelector((state) => state)

  // const dispatch = useDispatch()


  console.log("itemGroupP", itemGroupP)

  // egmed_consumption: 1,
  // total_consumption: 1,
  // item_qty1: 1,
  // item_status1: 1,
  // item_qty2: 1,
  // item_status2: 1,
  // market_size_id: 1,



  // const [testObj,setTestObj] = useState({test:"test"})
  // const [competitors,setCompetitors] = useState([])

  // const [competitor_id, setCompetitor_id] = useState(0)

  let marketSizeobjfromP = { ...marketSizeObj }

  const [marketSizeRecords,setMarketSizeRecords] = useState([])



  // {this.props.handelCallBack(this.state.marketSize)}
  let message = [{a : 1 , b : 2},{a : 2 , b : 33},{a : 4 , b : 5}]

  // handelCallBackRow(message)

  // handelCallBackRow(marketSizeRecords)


  // const userData = JSON.parse(useContext(UserContext));
  // const BL = userData.bl1_id;

  // const fetchCompetitors = async () => {
  //   // console.log("BL is checkBox ......,", BL);
  //   // console.log("supkey is checkBox ......,", supKey);

  //   // + BL +"/" + supKey
  //   // "http://https://backend-ahmed-shehata-crm.onrender.com/api/competitors/" + BL + "/" + supKey

  //   await fetch(`http://https://backend-ahmed-shehata-crm.onrender.com/api/competitors/${BL}/${supKey}`, {
  //     method: "GET",
  //     headers: new Headers({
  //       Authorization: "bearer " + userData.token,
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     }),
  //   }).then(async (response) => {
  //     const newData = await response.json();
  //     //    setSupplierName(newData);
  //     console.log("Competitors data inside fetch method", [...newData]);
  //     setCompetitors([...newData]);
  //   });
  // };
  // fetchCompetitors();

  // if(saveBtn){
  //   marketSizeobjfromP.marketSizeRecords.push({itemGroup:itemGroupP ,
  //     competitor_id:competitor_id,
  //     cometitor_name:competitorName,
  //     // egmed_consumption: 1,
  //     // total_consumption: 1,
  //     item_qty1: parseInt(text2),
  //     item_status1: item_status1,
  //     item_qty2: parseInt(text),
  //     item_status2: item_status2,
  //     market_size_id: 1,
  //   })
  //   }

  //   console.log("marketSizeobjfromP ",marketSizeobjfromP)+

  // parseInt(globalState.saveBtn) > 0 && console.log("testsaveBtnFrom Checkbox", parseInt(globalState.saveBtn))


//   useEffect(()=>{

//   if ((competitor_id > 0 && parseInt(text2) > 0 && parseInt(item_status2) > 0 )  || ( competitor_id > 0 && parseInt(text) > 0 && parseInt(item_status1) > 0 )) {
    
//     let newRecords = [...marketSizeRecords]
//     let recordObj = {
//       itemGroup: itemGroupC,
//       competitor_id: competitor_id,
//       cometitor_name: competitorName,
//       // egmed_consumption: 1,
//       // total_consumption: 1,
//       item_qty1: parseInt(text),
//       item_status1: parseInt(item_status1), 
//       item_qty2: parseInt(text2),
//       item_status2: parseInt(item_status2),
//       // market_size_id: 1
//     }
//     newRecords = [...newRecords , recordObj]

//     // handelCallBackRow(recordObj)

    
//     // setMarketSizeRecords([...marketSizeRecords,{
//     //   itemGroup: itemGroupC,
//     //   competitor_id: competitor_id,
//     //   cometitor_name: competitorName,
//     //   // egmed_consumption: 1,
//     //   // total_consumption: 1,
//     //   item_qty1: parseInt(text),
//     //   item_status1: parseInt(item_status1), 
//     //   item_qty2: parseInt(text2),
//     //   item_status2: parseInt(item_status2),
//     //   // market_size_id: 1
//     // }])
//     console.log("test for setMarketSizeRecords inside useEffect")
//     // setTimeout(()=>console.log("Market Size Records inside useEffect",marketSizeRecords),3000)
//     }

// }),[parseInt(globalState.saveBtn)]

  console.log('TestSaveBtn', globalState.saveBtn)



//   useEffect(() => {

//     console.log("itemGroupP from checkbox", itemGroupP)


//     console.log("marketSizeRecords inside useEffect",marketSizeRecords)

//     if (competitor_id > 0) {


//       console.log("itemGroupP from checkbox", itemGroupP)


//       parseInt(globalState.saveBtn) > 0 && console.log("testsaveBtnFrom Checkbox", parseInt(globalState.saveBtn))
      

//       marketSizeobjfromP.marketSizeRecords = marketSizeRecords


//       console.log("Market Size Records outSide useEffect",marketSizeRecords)

//  console.log("marketSizeobjfromP inside useEffect",marketSizeobjfromP)


//       parseInt(globalState.saveBtn) > 0 && console.log("marketSizeobjfromP after onChange item_Status2",marketSizeobjfromP)
      
      

//       setTimeout(() =>{ console.log("marketSizeobjfromP after CheckComp", finalArray)
      
//     }, 100)

//  setTimeout(()=>console.log("marketSize after Save Btn pressed ", globalState.marketSize),2000)


//     }




//     if (uncheckedComp > 0) {

//       console.log("uncheckedComp", uncheckedComp)

//       let UnChInx = marketSizeobjfromP.marketSizeRecords.findIndex((i) => i.competitor_id == uncheckedComp && i.itemGroup == unCheckItemGroup )

//       console.log("UnChInx", UnChInx)


//       marketSizeobjfromP.marketSizeRecords.splice(UnChInx, 1)


//       setTimeout(() => console.log("marketSizeobjfromP afterUnchecked", marketSizeobjfromP), 0)

//     }


 
//     setTimeout(() => console.log("FinalObj ", finalObj), 1000)



//   }, [parseInt(globalState.saveBtn)])



  console.log('TestSaveBtn', saveBtn)

  // let marketSizeRecordObj1 = {
  //   // marketSizeRecordsID: 1,
  //   egmed_consumption: 1,
  //   total_consumption: 1,
  //   competitor_id: competitor_id,
  //   item_qty1: 1,
  //   item_status1: 1,
  //   item_qty2: 1,
  //   item_status2: 1,
  //   market_size_id: 1,
  // }
let curr = 0
  const onChangeHandlerChecked1 = (_e,index) => {


    let competitorId = competitors[compInx].id

    setTimeout(()=>setcompetitor_id(competitorId),0)
    setTimeout(()=>parseInt(inx),0)

    console.log("testStoreforRecordIndex",parseInt(globalState.marketSizeRecordsId))


    if (!checked) {

      

      console.log("event.target.name check box Ttitle =", checkBoxTitle)
      console.log("competitors from checkbox are ...", competitors)
      console.log("compInxb ", compInx)
      console.log("competitor ID is ...", competitors[compInx].id)
      console.log("testinxRowId",inxRowId)
      const competitorId = competitors[compInx].id
      // const competitorName = competitors[compInx].competitor_name

      // setCompetitorName(competitorName)

      // setItemGroupC(itemGroupP)

      


      setAddCheck((current) =>current + 1)


      // setcompetitor_id(competitorId)

      // setTimeout(()=>setcompetitor_id(competitorId),0)

      // setItemGroupId(selectedItemGroup)

      
      // setTimeout(()=>setItemGroupId(selectedItemGroup),0)
      // setcompetitor_id(competitorId)

      
      // setTimeout(()=>setcompetitor_id(competitorId),0)

   

  

      setCurrAddRow(currAddRow)

      

      
      // let current = (current) =>current + 1

     


      //  setTimeout(()=>{ setegmed_consumption(0)
      //   settotal_consumption(0)
      //   setcompetitor_id(0)
      //   setitem_qty1(0)
      //   setitem_status1(0)
      //   setitem_qty2(0)
      //   setitem_status2(0)
      //   setmarket_size_id(0)},0)



      //  marketSizeobjfromP.marketSizeRecords.push({itemGroup:itemGroupP ,
      //   competitor_id:competitorId,
      //   cometitor_name:competitorName,
      //   // egmed_consumption: 1,
      //   // total_consumption: 1,
      //   item_qty1: text2,
      //   item_status1: item_status1,
      //   item_qty2: text,
      //   item_status2: item_status2,
      //   market_size_id: 1,
      // })
    } else if (checked) {
      const competitorId = competitors[compInx].id
      const competitorName = competitors[compInx].competitor_name
      console.log("the check Box compeitor unchecked compatitor Name is \n " + competitorName + " id is " + parseInt(competitorId))
      let newobj = { ...marketSizeobjfromP }

      console.log("testStoreforRecordIndex",parseInt(globalState.marketSizeRecordsId))
      setUncheckedComp(competitorId)

      setUnCheckItemGroup(itemGroupP)
      // setUnCheckItemGroup(selectedItemGroup)
      // setUncheckedComp(competitorId)

      setcompetitor_id(competitorId)

      
      setRemoveUnCheck((current) =>current + 1)


      // newobj.marketSizeRecords.splice(compInx, 1)

      setFinalObj(newobj)

      // !checked2 ? alert("please unchecked the second status first") : setitem_qty1(0)   
      // !checked2 ? alert("please unchecked the second status first") : setitem_status1(0)  
   
    



      setTimeout(() => console.log("marketSizeobjfromP ", marketSizeobjfromP), 0)

      setTimeout(() => console.log("FinalObj when UnCheck ", finalObj), 0)

    }


    




// if(
//       e.target.name == "item_status1" 
//       &&
//       checked === true
//       &&
//        text > 0 
//        &&
//        e.target.value > 0
//         ) {
//           // setitem_statusC1(e.target.value)

//       console.log("test for first item_status on Change")

//       marketSizeobjfromP.marketSizeRecords.push({
//         itemGroup: itemGroupC,
//         competitor_id: competitor_id,
//         cometitor_name: competitorName,
//         // egmed_consumption: 1,
//         // total_consumption: 1,
//         item_qty1: parseInt(text),
//         item_status1: parseInt(e.target.value),
//         // item_qty2: parseInt(text2),
//         // item_status2: parseInt(item_status2),
//         // market_size_id: 1
//       })

//       // setFinalObj(marketSizeobjfromP)

//       setTimeout(()=>console.log("marketSizeobjfromP after onChange item_Status1",marketSizeobjfromP),0)


//       // setTimeout(()=>console.log("marketSizeobjfromP after onChange item_Status1",marketSizeobjfromP),1000)
//     }

//     if(e.target.name == "item_status1"){
//       setitem_statusC1(e.target.value)
//     }




  }

  const onChangeHandlerChecked2 = (_e) =>{

    if (!checked2) {
      console.log("event.target.name check box Ttitle =", checkBoxTitle)
      console.log("competitors from checkbox are ...", competitors)
      console.log("compInxb ", compInx)
      console.log("competitor ID is ...", competitors[compInx].id)
      const competitorId = competitors[compInx].id
      const competitorName = competitors[compInx].competitor_name
      // setCompetitor_id(competitorId)
      setCompetitorName(competitorName)
      setItemGroupC(itemGroupP)

      setCurrAddRow(currAddRow)

      setInxRecoRow(inx)
      console.log("test for inxRowId from ComCheck",inxRowId)

 
      setcompetitor_id(competitorId)

      //  marketSizeobjfromP.marketSizeRecords.push({itemGroup:itemGroupP ,
      //   competitor_id:competitorId,
      //   cometitor_name:competitorName,
      //   // egmed_consumption: 1,
      //   // total_consumption: 1,
      //   item_qty1: text2,
      //   item_status1: item_status1,
      //   item_qty2: text,
      //   item_status2: item_status2,
      //   market_size_id: 1,
      // })
    }else if (checked2) {
      const competitorId = competitors[compInx].id
      const competitorName = competitors[compInx].competitor_name
      console.log("the check Box compeitor unchecked compatitor Name is \n " + competitorName + " id is " + parseInt(competitorId))
      let newobj = { ...marketSizeobjfromP }

      setUncheckedComp(competitorId)
      setUnCheckItemGroup(itemGroupP)

      // const competitorId = competitors[compInx].id
      setcompetitor_id(competitorId)

      setInxRecoRow(inx)

      // setitem_qty2(0)
      // setitem_status2(0)

      // newobj.marketSizeRecords.splice(compInx, 1)

      setFinalObj(newobj)



      setTimeout(() => console.log("marketSizeobjfromP ", marketSizeobjfromP), 0)

      setTimeout(() => console.log("FinalObj when UnCheck ", finalObj), 0)

    }


  }



  const onChangeSelectStatus1 = (e) => {


    setitem_statusC1(e.target.value)



    setitem_status1(parseInt(e.target.value))

    const competitorId = competitors[compInx].id
    setcompetitor_id(competitorId)

    setInxRecoRow(inx)

    if(text2 == 0){
    setitem_qty2(0)
    setitem_status2(0)
  }

    if(
      checked === true
      &&
       text > 0 
       &&
       e.target.value > 0
        ) {
          setitem_statusC1(e.target.value)

      console.log("test for first item_status on Change")

      // marketSizeobjfromP.marketSizeRecords.push({
      //   itemGroup: itemGroupC,
      //   competitor_id: competitor_id,
      //   cometitor_name: competitorName,
      //   // egmed_consumption: 1,
      //   // total_consumption: 1,
      //   item_qty1: parseInt(text),
      //   item_status1: parseInt(e.target.value),
      //   item_qty2: 0,
      //   item_status2: 0,
      //   // market_size_id: 1
      // })

      setTimeout(()=>console.log("marketSizeobjfromP after onChange item_Status1",marketSizeobjfromP),0)

      setFinalObj(marketSizeobjfromP)

     

    
    }

    // console.log("test for first item_status on Change")




  }



  const onChangeSelectStatus2 = (e) => {
    setitem_statusC2(e.target.value)
    setitem_status2(parseInt(e.target.value))


    const competitorId = competitors[compInx].id
    setcompetitor_id(competitorId)

    setInxRecoRow(inx)

    // marketSizeobjfromP.marketSizeRecords.splice(compInx, 1)

    // marketSizeobjfromP.marketSizeRecords.push({
    //   itemGroup: itemGroupC,
    //   competitor_id: competitor_id,
    //   cometitor_name: competitorName,
    //   // egmed_consumption: 1,
    //   // total_consumption: 1,
    //   item_qty1: parseInt(text),
    //   item_status1: parseInt(item_status1), 
    //   item_qty2: parseInt(text2),
    //   item_status2: parseInt(e.target.value),
    //   // market_size_id: 1
    // })

    // let index = marketSizeobjfromP.marketSizeRecords.indexOf({
    //   itemGroup: itemGroupC,
    //   competitor_id: competitor_id,
    //   cometitor_name: competitorName,
    //   // egmed_consumption: 1,
    //   // total_consumption: 1,
    //   // item_qty1: parseInt(text),
    //   // item_status1: parseInt(item_status1),
    //   item_qty2: parseInt(text2),
    //   item_status2: parseInt(item_status2),
    //   // market_size_id: 1
    // })
    // const states2Obj = {item_qty2: parseInt(text2),
    //   item_status2: parseInt(item_status2)}

    // marketSizeobjfromP = {...marketSizeobjfromP.marketSizeRecords[compInx],...{item_qty2: parseInt(text2),
    //   item_status2: parseInt(item_status2)}}

      // Object.assign(states2Obj, marketSizeobjfromP.marketSizeRecords[compInx]);

    // marketSizeobjfromP.marketSizeRecords[compInx].item_qty2 = parseInt(text2)
    // marketSizeobjfromP.marketSizeRecords[compInx].item_status2 = parseInt(item_status2)



    setTimeout(()=>console.log("marketSizeobjfromP after onChange item_Status2",marketSizeobjfromP),0)



    console.log("index from onchangeselectStatus2 is ",compInx)

    // marketSizeobjfromP.marketSizeRecords.push({
    //   itemGroup: itemGroupC,
    //   competitor_id: competitor_id,
    //   cometitor_name: competitorName,
    //   // egmed_consumption: 1,
    //   // total_consumption: 1,
    //   item_qty1: parseInt(text),
    //   item_status1:  parseInt(item_status1),
    //   item_qty2: parseInt(text2),
    //   item_status2: parseInt(e.target.value),
    //   // market_size_id: 1
    // })



    // console.log("saveBtn test",globalState.saveBtn)

    // setChangeStatus2(true)
    



  }


  // if(item_status1 !== 0  && item_status2 !== 0 && globalState.saveBtn == true ){
  //   marketSizeobjfromP.marketSizeRecords.push({itemGroup:itemGroupP ,
  //     competitor_id:competitor_id,
  //     cometitor_name:competitorName,
  //     // egmed_consumption: 1,
  //     // total_consumption: 1,
  //     item_qty1: parseInt(text2),
  //     item_status1: item_status1,
  //     item_qty2: parseInt(text),
  //     item_status2: item_status2,
  //     market_size_id: 1,
  //   })
  //   setTimeout(()=>console.log("marketSizeobjfromP ",marketSizeobjfromP) , 0)
  // }


  return (

    <div style={{ marginLeft: '10px' }} >
      <ul className={hTabs.competitorUL}>
        <li 
        style={{marginRight:'auto'}}
        className={hTabs.competitorli}>
          <input
           disabled={checked2}
            type="checkbox"
            name='checkBox'
            className={hTabs.checkBox}
            value="Bike"
            // onClick={onClickCheckBoxHandler}
            checked={checked}
            onChange={(e) => {
              onChangeHandlerChecked1(e , parseInt(globalState.marketSizeRecordsId))
              setInxSizeRow(inxSizeRow)
              if (checked) {
                setText("")
                // setText2("")
                setSelected(!selected)
              }
              if (checked === false) {
                setText("")
                // setText2("")
                setSelected(!selected)
              }
              setChecked(!checked)
              setSelected(!selected)
            }
            }
          ></input >

<label 
         style={{marginRight:'auto'}} className={hTabs.labels}>{checkBoxTitle}</label>


        </li>
      
        <li>
          <input
          className={hTabs.boxNum} 
           style={{marginRight:"15px"}}
          type="number"
            // style={{ display: "inline" }}
            disabled={!checked}
            value={text}
            onChange={e =>{ setText(e.target.value)
              setitem_qty1(parseInt(e.target.value))
              const competitorId = competitors[compInx].id
              setcompetitor_id(competitorId)
              setInxRecoRow(inx)
              setInxSizeRow(inxSizeRow)
             }  }
          />
        </li>

        <li  style={{marginLeft:"0px" }} className={hTabs.competitorli}>
          <select
            disabled={!checked}
            required
            name = "item_status1"
            // ref={activity_type_id}
            // className={
            //   // errActivitySelectType ? hTabs.dropDownErr : 
            //   // hTabs.dropDownList
            // }
            // id="activityType"
            onChange={(e) => {
              onChangeSelectStatus1(e)
              setInxSizeRow(inxSizeRow)


              // if(checked){
              //   setText("")
              // }

            }
            }
          >
            {/* {selected && <option value="0" disabled selected={selected} >
            Select Status
          </option>} */}

            <option value="0" selected={selected}>
              Select Status
            </option>

            <option value="1">Active</option>
            <option value="2">Inactive</option>
            <option value="3">Need Repair</option>
            <option value="4">Need Exchange</option>
            <option value="5">Under Installation</option>
          </select>

        </li>
        {/* second product status */}

         <li  style={{marginLeft:"0px" }} className={hTabs.competitorli}>
          <input
          disabled={!checked}
           style={{marginLeft: "20px"}}
            type="checkbox"
            name='checkBox'
            className={hTabs.checkBox}
            value="Bike"
            // onClick={onClickCheckBoxHandler}
            checked={checked2}
            onChange={(e) => {
              onChangeHandlerChecked2(e)
              setInxSizeRow(inxSizeRow)
              if (checked2) {
                // setText("")
                setText2("")
                setSelected2(!selected2)
              }
              if (checked2 === false) {
                // setText("")
                setText2("")
                setSelected2(!selected2)
              }
              setChecked2(!checked2)
              setSelected2(!selected2)
            }
            }
          ></input >
        </li>

        <li style={{marginRight:"15px"}} className={hTabs.competitorli}>
          <input className={hTabs.boxNum} type="number"
            style={{ display: "inline" }}
            disabled={!checked2}
            value={text2}
            // placeholder="V2"
            onChange={e => {setText2(e.target.value)
              setitem_qty2(parseInt(e.target.value))
              const competitorId = competitors[compInx].id
              setcompetitor_id(competitorId)
              setInxRecoRow(inx)
              setInxSizeRow(inxSizeRow)
            }}
          />
          
        </li>

        <li style={{marginLeft:"0px" }} className={hTabs.competitorli}>
          <select

            disabled={!checked2}
            required
            // ref={activity_type_id}
            // className={
            //   // errActivitySelectType ? hTabs.dropDownErr : 
            //   // hTabs.dropDownList
            // }
            // id="activityType"
            name="productList1"
            onChange={(e) => {
              onChangeSelectStatus2(e,inx)
              setInxSizeRow(inxSizeRow)
 }
            }

          >
            <option value="0" selected={selected2}>
              Select Another Status
            </option>
            <option value="1">Active</option>
            <option value="2">Inactive</option>
            <option value="3">Need Repair</option>
            <option value="4">Need Exchange</option>
            <option value="5">Under Installation</option>
          </select>

        </li>

{/* <button onClick={
 ()=> console.log("Market Size Records outSide useEffect",marketSizeRecords)
}>Records</button> */}


      </ul>





    </div>

  )
}

export default CheckCompetitor

