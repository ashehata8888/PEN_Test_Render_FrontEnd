import React, { cloneElement, Component } from "react";
import hTabs from "./hTabs.module.css";
import { withRouter } from "../Table/withRouter";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// import { Hidden } from "@mui/material";
// import PreLoader3 from "../Loading/PreLoader3";
import CheckCompetitor from "./ReusableComponents/CheckCompetitor";
import { updateMarketSize,
  updateSelectedItemGroup

} from "../../store/index";

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

// {<ArrowForwardIosSharpIcon  />}

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

class MarketSizeRow extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    records:[],
    testObj:parseInt(this.props.saveBtn),
    openId: 0,
    selectedItemGroup:0,
    userData: JSON.parse(this.props.uContext),
    id: this.props.idprop,
    suppliers: [],
    productFamilies: [],
    itemGroups: [],
    supplierId: 0,
    selectedMarketSizeRow: 0,
    expanded: `panel0`,
    competitors: [
      // { id: 1, name: "EGMED" },
      // { id: 2, name: "Okla" },
      // { id: 3, name: "Mokla" },
      // { id: 4, name: "EGMED" },
      // { id: 5, name: "Okla" },
      // { id: 6, name: "Mokla" },
      // { id: 7, name: "EGMED" },
      // { id: 8, name: "Okla" },
      // { id: 9, name: "Mokla" },
    ],
    marketSize: {
      marketSizeRowID: this.props.idprop,
      supplier_id: 0,
      product_family_id: 0,
      // item_group_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [

      ]
    }
  };

  // this.props.globalState.marketSize[0].supplier_id 

 message = "Hello from Child"


  selectOpen = (openId) => {
    this.setState({ openId });
  };



   CallBackRow = (childDataCheckBox) => {
    // const data = childData + ' this is adding test'

    // this.setState({records : [...this.state.records,childDataCheckBox]})
  let newMarketSize = this.state.marketSize
     newMarketSize.marketSizeRecords.push(childDataCheckBox)
     
     
     
     
    //  .filter((item,
    //   index) => newMarketSize.marketSizeRecords.indexOf(item) === index);



    //  let arr = newMarketSize.marketSizeRecords


    //   return arr.filter((item,
    //       index) => arr.indexOf(item) === index);
  




    // let recordsArr = []
    // recordsArr.push(childDataCheckBox)

    // this.props.callBackRecords(recordsArr)

    // this.props.callBackRecords(childDataCheckBox)


    // console.log("childDataCheckBox",JSON.stringify(childDataCheckBox))

    // let records = [JSON.stringify(childDataCheckBox)].map((j)=>j)
    // let records2 = [childDataCheckBox].map((j)=>j)
    // console.log("j is.... " , records2)
    // let recordsClone = [...records2]
    // // this.setState({marketSizeRecords : recordsClone })
    // console.log("RecordsClone...",recordsClone)





    // this.setState((prevState) => ({
    //   marketSize: {
    //     ...prevState.marketSize, // copy all other key-value pairs of food object
    //     marketSizeRecords : records.map((j)=>j)// update value of specific key

    //   },
    // }));

    // this.setState({marketSizeRecords: [JSON.stringify(childDataCheckBox)]})
  

  
  //  return recordsClone

 



    // return <div>
    //   <p>Message from chiled CheckBox - {JSON.stringify(childDataCheckBox)}</p>
    // </div>
  }

  componentDidUpdate(prevProps , prevState){
    if(prevState.marketSize !== this.state.marketSize ){
      this.CallBackRow()
    }
  }
 


// this.setState({ myArray: [...this.state.myArray, ...[1,2,3] ] }) //another array

  // marketSizeRowID: 0,
  // supplier_id: 0,
  // product_family_id: 0,
  // item_group_id: 0,
  // market_potential_id: 0,
  // marketSizeRecords: [
  //   {
  //     marketSizeRecordsID: 0,
  //     egmed_consumption: 0,
  //     total_consumption: 0,
  //     competitor_id: 0,
  //     item_qty1: 0,
  //     item_status1: 0,
  //     item_qty2: 0,
  //     item_status2: 0,
  //     market_size_id: 0,
  //   },
  // ],

  componentDidMount() {

  

    const BL = this.state.userData.bl1_id;
    const supllierID = this.state.supplierId;
    const fetchData = async () => {
      await fetch("http://https://backend-ahmed-shehata-crm.onrender.com/api/suppliers/names/" + BL, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + this.state.userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (response) => {
        const newData = await response.json();
        //    setSupplierName(newData);
        console.log("supplier data inside fetch method", [...newData]);

        console.log(
          "useSelector Testing ",
          this.props.globalState.marketPotentials.user_id
        );
        this.setState({ suppliers: [...newData] });
      });
    };
    fetchData();
  }


  // componentDidUpdate(prevProps){
  //   if (this.props.saveBtn == prevProps.saveBtn) {
  //     console.log("this.props.saveBtn" , prevProps)
  //    }
  
  // }

  accorhandleChange = (panel) => (event, newExpanded) => {
    this.setState({ expanded: newExpanded ? panel : true });
 
  };

  //    fetchData();

  supplieronChangeHandler = (event, index) => {
    const BL = this.state.userData.bl1_id;
    const supKey = event.target.value;
    this.setState({supplierId : supKey})
    

    // this.setState((prevState) => ({
    //   marketSize: {
    //     ...prevState.marketSize, // copy all other key-value pairs of food object
    //     supplier_id: parseInt(event.target.value), // update value of specific key
    //   },
    // }));

    // this.setState({ myArray: [...this.state.myArray, ...[1,2,3] ] })

  

    // this.setState({ marketSize : marketSize.supplier_id = supKey });

    // console.log("supplier id test ",this.state.marketSize.supplier_id)

    // this.props.marketSizeData(this.state.marketSize)

    // // clone
    // let items = [...this.state.marketSize]
    // let targetItem = [items,this.state.marketSize[index].supplier_id]

    // // change
    // targetItem = event.target.value

    // set

    // this.setState({marketSize : targetItem})

    // let newelement = [{
    //   marketSizeRowID: 0,
    //   supplier_id: parseInt(event.target.value),
    //   product_family_id: 0,
    //   item_group_id: 0,
    //   market_potential_id: 0,
    //   marketSizeRecords: [
    //     {
    //       marketSizeRecordsID: 0,
    //       egmed_consumption: 0,
    //       total_consumption: 0,
    //       competitor_id: 0,
    //       item_qty1: 0,
    //       item_status1: 0,
    //       item_qty2: 0,
    //       item_status2: 0,
    //       market_size_id: 0,
    //     },
    //   ],
    // }];

    //  this.state.marketSize.map(

    //   (obj,inx) => (inx === this.props.idprop ? Object.assign(obj, { supplier_id : parseInt(event.target.value) }) : obj)
    // )

    // this.setState({
    //   marketSize: [...this.state.marketSize, newelement],
    // });

    //     this.setState(prevState => ({

    //       marketSize: prevState.marketSize.map(

    //     (obj,inx) => (inx === this.props.idprop ? Object.assign(obj, { supplier_id : parseInt(event.target.value) }) : obj)
    //   )
    // }));

    // console.log("this.props.idprop ",this.props.idprop)
    // this.setState((prevState) => {
    //   return {
    //     marketSize: [...prevState.marketSize,prevState.marketSize[index].supplier_id = parseInt(event.target.value)]
    //   };
    // });

    // console.log("test this.state.marketSize ", [...this.state.marketSize]);

    // this.props.dispatch(updateSupplier_id(event.target.value));

    const pFresponse = async () => {
      fetch("http://https://backend-ahmed-shehata-crm.onrender.com/api/product_families/names/" + supKey, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + this.state.userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (pFresponse) => {
        const newPFData = await pFresponse.json();
        //    setProductFamily(newPFData);
        this.setState({ productFamilies: [...newPFData] });
        console.log("pFresponse() was called",[...newPFData]);
      });  
    };

    pFresponse()

    // const pFresponseGS = async () => {
    //   fetch(
    //     "http://https://backend-ahmed-shehata-crm.onrender.com/api/product_families/names/" + this.state.supplierId,
    //     {
    //       method: "GET",
    //       headers: new Headers({
    //         Authorization: "bearer " + this.state.userData.token,
    //         "Content-Type": "application/x-www-form-urlencoded",
    //       }),
    //     }
    //   ).then(async (pFresponse) => {
    //     const newPFData = await pFresponse.json();
    //     //    setProductFamily(newPFData);
    //     this.setState({ productFamilies: [...newPFData] });
    //     console.log("pFresponseGS() was called",[...newPFData]);
    //   });
    // };

    // this.state.supplierId == undefined ? pFresponse() : pFresponseGS();

    // (this.state.supplierId != undefined || this.state.supplierId != null) &&  pFresponseGS() ;

    const fetchCompetitors = async () => {
      console.log("BL is ......,", BL);
      console.log("supkey is ......,", supKey);

      // + BL +"/" + supKey
      // "http://https://backend-ahmed-shehata-crm.onrender.com/api/competitors/" + BL + "/" + supKey
      await fetch(`http://https://backend-ahmed-shehata-crm.onrender.com/api/competitors/${BL}/${supKey}`, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + this.state.userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (response) => {
        const newData = await response.json();
        //    setSupplierName(newData);
        console.log("Competitors data inside fetch method", [...newData]);
        this.setState({ competitors: [...newData] });
      });
    };
    fetchCompetitors();
  };

  ProductFamilyOnCahngeHandler = (event, index) => {
    const pFKey = event.target.value;
    // this.setState({product_family_id : pFKey })
    console.log("product Family id from marketsize Row", pFKey);
    // setproductFamilyId(pFKey);
    // this.setState({ productFamilies: [...pFKey] });

    // if(this.state.marketSize.supplier_id != 0 &&
    //   this.state.marketSize.product_family_id != 0){
    this.setState((prevState) => ({
      marketSize: {
        ...prevState.marketSize, // copy all other key-value pairs of food object
        product_family_id: parseInt(event.target.value), // update value of specific key
      },
    }));
    setTimeout(
      () =>
        console.log(
          "productFamily id test ",
          this.state.marketSize.product_family_id
        ),
      0
    );

  
    // }

    const iGresponse = async () => {
      fetch("http://https://backend-ahmed-shehata-crm.onrender.com/api/item_groups/names/" + pFKey, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + this.state.userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (iGResponse) => {
        const newiGData = await iGResponse.json();
        console.log("item Group after fetching", [...newiGData]);
        //    setItemGroup(newiGData);
        newiGData.length < 1000
          ? this.setState({ expanded: "" })
          : this.setState({ expanded: "panel0" });
        this.setState({ itemGroups: [...newiGData] });
      });
    };
    iGresponse();
  };

  itemGrouponChangeHandler = (event, index) => {
    console.log("itemGrouponChangeHandler", event.target.value);
  };

  onClickAccordion = (event, inx) => {
    console.log("this.state.itemGroups", this.state.itemGroups);
    console.log("onClickAccordion", event.currentTarget.textContent);
    console.log('testThis State from accordion ',this.state.marketSize)
    // const index = this.state.itemGroups.findIndex((obj) => {
    //   console.log("obj.item_group", obj);
    //   return obj.item_group == `${event.currentTarget.textContent}`
    //     ? obj.id
    //     : "";
    // });

    console.log(
      "useSelectorMarketSize Testing ",
      this.props.globalState.marketSize );


    console.log("IndexAccorHandelChange", inx);
    console.log("testIndex", this.state.itemGroups[inx].id);
    const selectedItemGroupP = this.state.itemGroups[inx].id;
    this.setState({selectedItemGroup : parseInt(selectedItemGroupP) })
    // let IG =  parseInt(selectedItemGroupP)

    // console.log("ig",IG)


    // this.setState((prevState) => ({
    //   selectedItemGroup: {
    //     ...prevState.selectedItemGroup, // copy all other key-value pairs of food object
    
    //     selectedItemGroup: IG,
    //   },
    // }));


    // this.props.dispatch(updateSelectedItemGroup(IG))
    
    // this.setState((prevState) => ({
    //   marketSize: {
    //     ...prevState.marketSize, // copy all other key-value pairs of food object
    //     item_group_id: selectedItemGroup, // update value of specific key
    //     marketSizeRowID: this.props.idprop,
    //     marketSizeRecords: [...[this.marketSizeRecordObj1,this.marketSizeRecordObj2] ]
    //   },
    // }));

    console.log("testObj ",this.state.testObj)

    // this.setState((prevState) => ({
    //   marketSize: {
    //     ...prevState.marketSize.marketSizeRecords, // copy all other key-value pairs of food object
    //     marketSizeRecords: [...this.state.marketSizeRecords, ...[marketSizeRecordObj1,marketSizeRecordObj2] ], // update value of specific key
    //   },
    // }));




console.log("testSaveBNT",this.props.saveBtn)


    // setTimeout(() => this.props.marketSizeData(this.state.marketSize), 0);

  };

  handleFormChangeProductCall = (event, index, indexC) => {
    //  document.getElementById(`${index}`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}PF`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}IG`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}CO`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}CS`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}CP`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}MN`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}A`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}S`).setAttribute("style", "background-color : none;")
    //  document.getElementById(`${index}P`).setAttribute("style", "background-color : none;")

    // // let elementC = document.getElementById(``)
    // element.setAttribute("style", "background-color : none;")
    if (event.target.name === "supplier") {
      this.setState((prevState) => ({
        marketSize: {
          ...prevState.marketSize, // copy all other key-value pairs of food object
          supplier_id: parseInt(event.target.value) // update value of specific key
 
        },

      }));
      console.log("this.state.testObj" , this.state.testObj)
      console.log("testSaveBTNFromMS",this.props.saveBtn)

      //  this.props.idprop == 0 ? this.props.dispatch(u0pdateSupplier_id(parseInt(event.target.value))) :
       
      this.supplieronChangeHandler(event, index);
      let element = document.getElementById(`${index}`);
      element?.setAttribute("style", "background-color : none;");

      // let dataP = [...this.state.suppliers];
      // dataP[index]["supplier"] = event.target.value;
    } else if (event.target.name === "productFamily") {

      this.setState((prevState) => ({
        marketSize: {
          ...prevState.marketSize, // copy all other key-value pairs of food object
          product_family_id: event.target.value // update value of specific key
 
        },
      }));

      this.ProductFamilyOnCahngeHandler(event);
      let element = document.getElementById(`${index}PF`);
      element?.setAttribute("style", "background-color : none;");
      // let dataP = [...this.state.productFamilies];
      // dataP[index]["productFamily"] = event.target.value;
      //   setVal(dataP);
    } 
    // else if (event.target.name === "itemGroup") {
    //   this.itemGrouponChangeHandler(event, index);
    //   console.log("onChange Item Group", event.target.value);

    //   let element = document.getElementById(`${index}IG`);
    //   element?.setAttribute("style", "background-color : none;");
    //   let dataP = [...this.state.itemGroups];
    //   dataP[index]["itemGroup"] = event.target.value;
 
    // } 
  };

  deleteMarketRow = (e, idprop) => {
    e.preventDefault();
    this.setState({ selectedMarketSizeRow: idprop });
    console.log(" Deletbtn value", idprop);

    localStorage.setItem("selectedMarketSizeRow", JSON.stringify(idprop));
  };

  render() {
    console.log("suppliers from MarketSizeRow", this.state.suppliers);

   

    return (
  
      <div
        idprop={this.state.id}
        style={{
          store: JSON.parse(this.props.uContext),
          marginTop: "60px",
          zIndex: "500",
          height: "1fr",
          overflowY: "auto",
          border: "1px solid #ebe5e5 ",
          borderRadius: "5px",
          width: "80%",
        }}
      >

            <div>
            {this.props.handelCallBack(this.state.marketSize)}
           
            </div>

            <div>
            Sobhan Allah al Azim 
            </div>



        <div> Testing idprop Supplier Id is :{this.props.idprop}</div>

        <div className={hTabs.productBox}>
          <label className={hTabs.minLable}>Supplier</label>
          <select
            name="supplier"
            //   value={data.supplier}
            // value={}
            className={
              // errSupplier
              //   ? hTabs.dropDownPErr
              //   :
              hTabs.productBoxSelect
            }
            //   id={index}
            onChange={(event) =>
              this.handleFormChangeProductCall(event, this.props.idprop)
            }
            // onSelected ={(event) => this.handleFormChangeProductCall(event, 0)}
            //   ref={eSupplierRef}
          >
            <option value="0">Select Supplier</option>
            {this.state.suppliers &&
              this.state.suppliers.length > 0 &&
              this.state.suppliers.map((userObj, index) => (
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
            name="productFamily"
            //   value={data.productFamily}
            onChange={(event) => this.handleFormChangeProductCall(event, 0)}
            onClick={
              this.state.suppliers.length === 1
                ? (event) => this.handleFormChangeProductCall(event, 0)
                : ""
            }
            // id={`${0}PF1`}
            //   ref={ePFRef}
          >
            <option value="0" hidden>
              Select Family
            </option>
            {this.state.productFamilies &&
              this.state.productFamilies.length > 0 &&
              this.state.productFamilies.map((userObj, index) => (
                <option value={userObj.id} key={userObj.id}>
                  {userObj.product_family}
                </option>
              ))}
          </select>
        </div>

        <span style={{ visiblity: "hidden" }}>
          {/* className={hTabs.deleteFamilyBtn} */}
          <button
            className={hTabs.deleteFamilyBtn}
            onClick={(e) => this.deleteMarketRow(e, this.props.idprop)}
          >
            -
          </button>
        </span>
        <div className={hTabs.accordionContainer}>
          {this.state.itemGroups.map((userObj, index) => {
            return (
              <Accordion
                key={index}
                expanded={
                  this.props.expander
                    ? this.state.expanded === `panel${index}`
                    : this.state.itemGroups.length == 1
                    ? this.state.expanded === `panel${index}`
                    : this.state.expanded === `panel${index}`
                }
                onChange={this.accorhandleChange(`panel${index}`)}
                onClick={(event) => this.onClickAccordion(event, index)}

                //     accordionId={index}
                //  open={this.state.openId}
                //   handleClick={this.selectOpen}
              >
                <AccordionSummary aria-controls="panel1d-content">
                  <Typography style={{ color: "black" }} variant="h5">
                    {userObj.item_group}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails >
                  {this.state.competitors.map((obj, inx) => (
                    <div className={hTabs.checkCompetitor} key={obj.id}>
                      
                      <CheckCompetitor 
                      rowInx={this.props.idprop}
                      checkBoxTitle={obj.competitor_name} 
                      competitors={this.state.competitors}
                      compInx ={inx}
                      marketSizeObj = {this.state.marketSize}
                      itemGroupP= {this.state.selectedItemGroup}
                      saveBtn={this.props.saveBtn}
                      currAddRow = {this.props.currAddRow}
                      handelCallBackRow = {this.CallBackRow}
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
}

export default withRouter(MarketSizeRow);
