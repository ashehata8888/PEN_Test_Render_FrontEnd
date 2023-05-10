import hTabs from "./hTabs.module.css";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import CheckCompetitor from "./ReusableComponents/CheckCompetitor";
import { v4 as uuid } from 'uuid';
import {
  updateMarketSize,
  updateSelectedItemGroup
} from "../../store/index";
import { UserContext } from "./Home";
import { useState,useContext, useEffect } from "react";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  minWidth: "20rem",
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: "0.5",
  },
  "&:before": {
    display: "none",
  },
}));

console.log("Hello")
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon="" {...props} />
))(({ theme }) => ({
  minWidth: "20rem",
  minHeight: "20px",
  height: "40px",
  marginTop: "0px",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));


export default function MarketSizeRow({
  // setUnCheckItemGroup,
  // setUncheckedComp,
  inxRowId,
  setRemoveUnCheck,
  setAddCheck,
  setInxRecoRow,
  setmarketSizeRecordsID ,
  setegmed_consumption ,
  settotal_consumption ,
  setcompetitor_id ,
  setitem_qty1 ,
  setitem_status1 ,
  setitem_qty2 ,
  setitem_status2 ,
  setmarket_size_id ,
  setItemGroupId,
  setInxSizeRow,setEve,idprop,saveBtn,setSupplierId,setProductFamilyId}) {

    const [addCheckMSR,setAddCheckMSR] = useState(0)

  const [suppliers,setSuppliers] = useState([])
  const [expanded,setExpanded] = useState()
  // const [supplierId,setSupplierId] = useState(0)
  const [productFamilies, setProductFamilies] = useState([])
  const [competitors,setCompetitors] = useState([])
  // const [productFamilyId,setProductFamilyId] = useState(0)
  const [itemGroups,setItemGroups] = useState([])
  const [selectedItemGroup,setSelectedItemGroup] = useState(0)

  const [compinxfromMSRow ,setCompinxfromMSRow] = useState(0)
  const [inxSizeRowR,setInxSizeRowR] = useState(0)
  const [inxRowIdR,setInxRowIdR] = useState(0)
  
  const userData = JSON.parse(useContext(UserContext));
  const key = userData.id;
  const BL = userData.bl1_id;

  // setAddCheck(addCheckMSR)

  // console.log("compinxfromMSRow...",compinxfromMSRow)
  // setcompetitor_id(compinxfromMSRow)

  // let state = {
  //   records: [],
  //   testObj: parseInt(this.props.saveBtn),
  //   selectedItemGroup: 0,
  //   userData: JSON.parse(this.props.uContext),
  //   id: this.props.idprop,
  //   productFamilies: [],
  //   itemGroups: [],
  //   supplierId: 0,
  //   selectedMarketSizeRow: 0,
  //   expanded: `panel0`,
  //   competitors: [
  //   ],
  //   marketSize: {
  //     marketSizeRowID: this.props.idprop,
  //     supplier_id: 0,
  //     product_family_id: 0,
  //     market_potential_id: 0,
  //     marketSizeRecords: [
  //     ]
  //   }
  // };
  let message = "Hello from Child"


  // CallBackRow = (childDataCheckBox) => {
  //   let newMarketSize = this.state.marketSize
  //   newMarketSize.marketSizeRecords.push(childDataCheckBox)
  // }

  // if (prevState.marketSize !== this.state.marketSize) {
  //   this.CallBackRow()
  // }
useEffect(()=>{
  const supllierID = userData.supplierId;
  const fetchData = async () => {
    await fetch("http://https://backend-ahmed-shehata-crm.onrender.com/api/suppliers/names/" + BL, {
      method: "GET",
      headers: new Headers({
        Authorization: "bearer " + userData.token,
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    }).then(async (response) => {
      const newData = await response.json();
      console.log("supplier data inside fetch method", [...newData]);
   
      setSuppliers([...newData]);
    });
  };
  fetchData();
},[])

  

 const accorhandleChange = (panel) => (event, newExpanded) => {
  newExpanded ? setExpanded(panel) : setExpanded(true)  
  };

  const supplieronChangeHandler = (event, index) => {
    setEve(event.target.name)
    setInxSizeRow(index)
    const BL = userData.bl1_id;
    const supKey = event.target.value;
  
    setSupplierId(parseInt(event.target.value))
    const pFresponse = async () => {
      fetch("http://https://backend-ahmed-shehata-crm.onrender.com/api/product_families/names/" + supKey, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (pFresponse) => {
        const newPFData = await pFresponse.json();
        setProductFamilies([...newPFData])
        console.log("pFresponse() was called", [...newPFData]);
      });
    };
    pFresponse()
    const fetchCompetitors = async () => {
      console.log("BL is ......,", BL);
      console.log("supkey is ......,", supKey);
      await fetch(`http://https://backend-ahmed-shehata-crm.onrender.com/api/competitors/${BL}/${supKey}`, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (response) => {
        const newData = await response.json();
        console.log("Competitors data inside fetch method", [...newData]);
        setCompetitors([...newData])
      });
    };
    fetchCompetitors();
  };

  const ProductFamilyOnChangeHandler = (event, index) => {
    setEve(event.target.name)
    setInxSizeRow(index)
    setInxSizeRowR(index)
    setInxRowIdR(inxRowId)
    console.log()

    const pFKey = event.target.value;
    console.log("product Family id from marketsize Row", pFKey);
   setProductFamilyId(parseInt(event.target.value))

    const iGresponse = async () => {
      fetch("http://https://backend-ahmed-shehata-crm.onrender.com/api/item_groups/names/" + pFKey, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (iGResponse) => {
        const newiGData = await iGResponse.json();
        console.log("item Group after fetching", [...newiGData]);
        newiGData.length < 1000
          ? setExpanded("")
          : setExpanded("panel0");
            
       setItemGroups([...newiGData])
      });
    };
    iGresponse();
  };


  const onClickAccordion = (event, inx) => {
    console.log("this.state.itemGroups", itemGroups);
    // console.log("onClickAccordion", event.currentTarget.textContent);
    // console.log('testThis State from accordion ', marketSize)
    // console.log(
    //   "useSelectorMarketSize Testing ",
    //   globalState.marketSize);
    console.log("IndexAccorHandelChange", inx);
    console.log("testIndex", itemGroups[inx].id);
    const selectedItemGroupP = itemGroups[inx].id;
    setSelectedItemGroup(parseInt(selectedItemGroupP))
    setItemGroupId(parseInt(selectedItemGroupP))
    // setItemGroupId(parseInt(selectedItemGroupP))


  };



  // handleFormChangeProductCall = (event, index) => {

  // //  const data = 

  //   if (event.target.name === "supplier") {
  //     setState((prevState) => ({
  //       marketSize: {
  //         ...prevState.marketSize,
  //         supplier_id: parseInt(event.target.value)
  //       },
  //     }));
  //     console.log("this.state.testObj", this.state.testObj)
  //     console.log("testSaveBTNFromMS", this.props.saveBtn)
  //     supplieronChangeHandler(event, index);
  //     let element = document.getElementById(`${index}`);
  //     element?.setAttribute("style", "background-color : none;");
  //   } 
    
  //   else if (event.target.name === "productFamily") {
  //     setState((prevState) => ({
  //       marketSize: {
  //         ...prevState.marketSize,
  //         product_family_id: event.target.value
  //       },
  //     }));
  //     this.ProductFamilyOnChangeHandler(event);
  //     let element = document.getElementById(`${index}PF`);
  //     element?.setAttribute("style", "background-color : none;");
  //   }
  // };



  // const deleteMarketRow = (e, idprop) => {
  //   e.preventDefault();
  //   setState({ selectedMarketSizeRow: idprop });
  //   console.log(" Deletbtn value", idprop);
  //   localStorage.setItem("selectedMarketSizeRow", JSON.stringify(idprop));
  // };

  


  return (
    <div
      // idprop={this.state.id}
      style={{
        // store: JSON.parse(this.props.uContext),
        marginTop: "60px",
        zIndex: "500",
        height: "1fr",
        overflowY: "auto",
        border: "1px solid #ebe5e5 ",
        borderRadius: "5px",
        width: "80%",
      }}
    >
      {/* <div>
        {this.props.handelCallBack(this.state.marketSize)}
      </div> */}
      {/* <div>
        Sobhan Allah al Azim
      </div> */}
      {/* <div> Testing idprop Supplier Id is :{idprop}</div> */}
      <div className={hTabs.productBox}>
        <label className={hTabs.minLable}>Supplier</label>
        <select
          name="supplier_id"
          className={
            hTabs.productBoxSelect
          }
          onChange={(event) => supplieronChangeHandler(event, idprop)
          }
        >
          <option value="0">Select Supplier</option>
          {suppliers &&
            suppliers.length > 0 &&
            suppliers.map((userObj, index) => (
              <option value={userObj.id} key={userObj.id}>
                {userObj.supplier_name}
              </option>
            ))}
        </select>
      </div>
      <div className={hTabs.productBox}>
        <label className={hTabs.minLable}>Product Family</label>
        <select
          className={hTabs.productBoxSelect}
          name="product_family_id"
          onChange={(event) => ProductFamilyOnChangeHandler(event, idprop)}

        >
          <option value="0" hidden>
            Select Family
          </option>
          {productFamilies &&
            productFamilies.length > 0 &&
            productFamilies.map((userObj, index) => (
              <option value={userObj.id} key={userObj.id}>
                {userObj.product_family}
              </option>
            ))}
        </select>
      </div>
      <span style={{ visiblity: "hidden" }}>
     
        <button
          className={hTabs.deleteFamilyBtn}
          onClick={(e) => this.deleteMarketRow(e,idprop)}
        >
          -
        </button>
      </span>
      <div className={hTabs.accordionContainer}>
        {itemGroups.map((userObj, index) => {
          return (
            <Accordion
              key={index}
              expanded={
                expanded
                  ? expanded === `panel${index}`
                  : itemGroups.length == 1
                    ? expanded === `panel${index}`
                    : expanded === `panel${index}`
              }
              onChange={accorhandleChange(`panel${index}`)}
              onClick={(event) => {onClickAccordion(event, index)
             
              }}
            >
              <AccordionSummary aria-controls="panel1d-content">
                <Typography style={{ color: "black" }} variant="h5">
                  {userObj.item_group}
                </Typography>
              </AccordionSummary>
              <AccordionDetails >
                {competitors.map((obj, inx) => (
                  
                  <div className={hTabs.checkCompetitor} key={obj.id}>
              
                    <CheckCompetitor
                    inx={uuid().slice(0,8)}
                    // setUnCheckItemGroup = {setUnCheckItemGroup}
                    // setUncheckedComp={setUncheckedComp}
                    inxSizeRow = {inxSizeRowR}
                    setInxSizeRow = {setInxSizeRow}
                    inxRowId = {inxRowId}
                    setInxRecoRow = {setInxRecoRow}
                    setRemoveUnCheck = {setRemoveUnCheck}
                      setAddCheck={setAddCheck}
                      setmarketSizeRecordsID = {setmarketSizeRecordsID}
                      setegmed_consumption = {setegmed_consumption}
                      settotal_consumption = {settotal_consumption}
                      setcompetitor_id = {setcompetitor_id}
                      setitem_qty1 = {setitem_qty1}
                      setitem_status1 = {setitem_status1}
                      setitem_qty2 = {setitem_qty2}
                      setitem_status2 = {setitem_status2}
                      setmarket_size_id = {setmarket_size_id}
                      // setItemGroupId = {setItemGroupId}
                      selectedItemGroup = {selectedItemGroup}
                      
                      // setCompinxfromMSRow


                      rowInx={idprop}
                      checkBoxTitle={obj.competitor_name}
                      competitors={competitors}
                      compInx={inx}
                      // marketSizeObj={marketSize}
                      itemGroupP={selectedItemGroup}
                      saveBtn={saveBtn}
                      // currAddRow={currAddRow}
                      // handelCallBackRow={CallBackRow}
                    />
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}
