/* eslint-disable */

import React, {
  useContext,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  Fragment,
  useEffect,
} from "react";
import { UserContext } from "./Home";
import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import hTabs from "./hTabs.module.css";
import CustomerInfoAccordion from "./CustomerInfoAccordion";
import CallInfoAccordion from "./CallInfoAccordion copy";
import { Hidden } from "@mui/material";
import PreLoader3 from "../Loading/PreLoader3";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
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

export default function CustomizedAccordions({
  displayPassMainBtns,
  count,
  delCount,
  saveCount,
  setCountCustAccorToFullW,
  setCountCustAccorToFullWC,
}) {
  const [expanded, setExpanded] = useState("panel99");
  const [displayAccordion, setDisplayAccordion] = useState(
    hTabs.callInfoAccordionhidden
  );

  const [countSavCmrToCusAccor, setCountSavCmrToCusAccor] = useState(0);
  const [countSavCmrToCusAccorC, setCountSavCmrToCusAccorC] = useState(0);

  setCountCustAccorToFullWC(countSavCmrToCusAccorC);

  setCountCustAccorToFullW(countSavCmrToCusAccor);

  console.log(
    " the new COUNT of Savging from customer to Customzed According is ",
    countSavCmrToCusAccor
  );

  const eSupplierRef = useRef();
  const ePFRef = useRef();
  const eIGRef = useRef();
  const eINRef = useRef();
  const eISRef = useRef();
  const eCORef = useRef();
  const eCSRef = useRef();

  const elementCPRef = useRef();
  const elementMNRef = useRef();
  const elementARef = useRef();
  const elementSRef = useRef();
  const elementPRef = useRef();

  const mNRegex = /^(?=\d{11}$)(011|010|012|018|015)\d+/;
  // /^0[01]\d{10}$/;

  const [saveSuccessMsg, setSaveSuccessMsg] = useState();

  let valContArr = [
    {
      contactPerson: "",
      mobileNumber: "",
      authority: "",
      speciality: "",
      position: "",
    },
  ];
  let [val, setVal] = useState([
    {
      supplier: "",
      productFamily: "",
      itemGroup: "",
      itemName: "",
      itemStock: "",
      callObjective: "",
      callStatus: "",
      contData: valContArr,
    },
  ]);

  const [valCont, setValCont] = useState([
    {
      contactPerson: "",
      mobileNumber: "",
      authority: "",
      speciality: "",
      position: "",
    },
  ]);

  const [indexPC, setindexPC] = useState(0);
  const [activityId, setActivityId] = useState(0);
  const [accountId, setAccountIdPass] = useState(0);
  const [indexCont, setIndexCont] = useState(0);
  const [IndexContD, setIndexContD] = useState(0);
  const [customAcorCount, setCustomAcorCount] = useState(0);

  const [SupplierName, setSupplierName] = useState("");
  const [ProductFamily, setProductFamily] = useState("");
  const [ItemGroup, setItemGroup] = useState("");

  const [supplierId, setSupplierId] = useState(0);
  const [productFamilyId, setproductFamilyId] = useState(0);
  const [ItemGroupId, setItemGroupId] = useState(0);
  const [objectiveId, setObjectiveId] = useState(0);
  const [statusId, setStatusId] = useState(0);
  const [callProductId, setCallProductId] = useState(0);
  const [callProductIdSet, setCallProductIdSet] = useState(0);

  const [contactPerson, setContactPerson] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [authorityId, setAuthorityId] = useState(0);
  const [specialityId, setSpecialityId] = useState(0);
  const [positionId, setPositionId] = useState(0);

  const [contactCount, setcontactCount] = useState(0);

  const [accountArea, setAccountArea] = useState("");
  const [displayAccountsData, setDisplayAccountsData] = useState(
    hTabs.hideActivityData
  );

  let [xCount, setXcount] = useState(1);
  let [xDCount, setXDCount] = useState(0);
  let [IndexPD, setIndexPD] = useState(0);

  let [DM, setDM] = useState(false);

  const [alret, setAlert] = useState("");
  const [errSupplier, setErrSupplier] = useState(false);
  const [savCustomerCont, setSavCustomerCont] = useState(0);
  const [finalCustomAccordCount, setFinalCustomAccordCount] = useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : true);
  };

  const displayPass = (name) => {
    setDisplayAccordion(name);
    displayPassMainBtns(name);
  };

  let [IndexP, setIndexP] = useState(0);

  useEffect(() => {
    const childFunction1 = () => {};

    const addNewActivtyCall = () => {
      let x = 1;
      let newcallProductRow = {
        supplier: "",
        productFamily: "",
        itemGroup: "",
        callObjective: "",
        callStatus: "",
        contData: valContArr,
      };

      let contLength = val[val.length - 1]["contData"].length;

      if (
        val[val.length - 1].supplier != 0 &&
        val[val.length - 1].productFamily != 0 &&
        val[val.length - 1].itemGroup != 0 &&
        val[val.length - 1].callObjective != 0 &&
        val[val.length - 1].callStatus != 0 &&
        val[val.length - 1]["contData"][contLength - 1].contactPerson !== "" &&
        val[val.length - 1]["contData"][contLength - 1].mobileNumber !== "" &&
        mNRegex.test(
          val[val.length - 1]["contData"][contLength - 1].mobileNumber
        ) &&
        val[val.length - 1]["contData"][contLength - 1].authority != 0 &&
        val[val.length - 1]["contData"][contLength - 1].speciality != 0 &&
        val[val.length - 1]["contData"][contLength - 1].position != 0
      ) {
        setVal([...val, newcallProductRow]);
        console.log("Mobile Number Regex is True");
      }

      if (val[val.length - 1].supplier == 0) {
        const divElement = eSupplierRef?.current;
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = eSupplierRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1].productFamily == 0) {
        const divElement = ePFRef?.current;
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = ePFRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1].itemGroup == 0) {
        const divElement = eIGRef?.current;
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = eIGRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1].callObjective == 0) {
        const divElement = eCORef?.current;
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = eCORef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1].callStatus == 0) {
        const divElement = eCSRef?.current;
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = eCSRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (
        val[val.length - 1]["contData"][contLength - 1].contactPerson === ""
      ) {
        //  event.currentTarget.className = `${hTabs.dropDownPErr}`
        const divElement = elementCPRef?.current;
        console.log("Contact Person Element is :", divElement);
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = elementCPRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      let mobileValue =
        val[val.length - 1]["contData"][contLength - 1].mobileNumber;
      if (
        mobileValue === "" ||
        !mNRegex.test(
          val[val.length - 1]["contData"][contLength - 1].mobileNumber
        )
      ) {
        //  event.currentTarget.className = `${hTabs.dropDownPErr}`
        const divElement = elementMNRef?.current;
        console.log("Contact Person Element is :", divElement);
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = elementMNRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1]["contData"][contLength - 1].authority == 0) {
        //  event.currentTarget.className = `${hTabs.dropDownPErr}`
        const divElement = elementARef?.current;
        console.log("Contact Person Element is :", divElement);
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = elementARef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1]["contData"][contLength - 1].speciality == 0) {
        //  event.currentTarget.className = `${hTabs.dropDownPErr}`
        const divElement = elementSRef?.current;
        console.log("Contact Person Element is :", divElement);
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = elementSRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1]["contData"][contLength - 1].position == 0) {
        //  event.currentTarget.className = `${hTabs.dropDownPErr}`
        const divElement = elementPRef?.current;
        console.log("Contact Person Element is :", divElement);
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = elementPRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      //  setindexPC(val.length)
    };

    // 👇️ don't run on initial render
    if (count !== 0 && count < 51) {
      childFunction1();
      addNewActivtyCall();
    }
  }, [count]);

  useEffect(() => {
    const childFunction2 = () => {
      //// console.log('child function 2 called')
    };

    const deleteNewActivtyCall = (i) => {
      const deleteVal = [...val];
      deleteVal.splice(val.length - 1, 1);
      setVal(deleteVal);
    };

    // 👇️ don't run on initial render
    if (delCount !== 0 && val.length > 1) {
      deleteNewActivtyCall();

      childFunction2();
    }
  }, [delCount]);

  useEffect(() => {
    const saveBtncheckClicked = () => {};

    if (saveCount !== 0) {
      saveBtncheckClicked();
    }
  }, [saveCount]);

  const userData = JSON.parse(useContext(UserContext));
  const key = userData.bl1_id;

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://https://backend-ahmed-shehata-crm.onrender.com/api/suppliers/names/" + key, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (response) => {
        const newData = await response.json();
        setSupplierName(newData);
      });
    };
    fetchData();
  }, []);

  const supplieronChangeHandler = (event, _index) => {
    const supKey = event.target.value;
    setSupplierId(supKey);
    const pFresponse = async () => {
      fetch("http://https://backend-ahmed-shehata-crm.onrender.com/api/product_families/names/" + supKey, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (pFresponse) => {
        const newPFData = await pFresponse.json();
        setProductFamily(newPFData);
      });
    };
    pFresponse();
  };

  const ProductFamilyOnCahngeHandler = (event, index) => {
    const pFKey = event.target.value;
    setproductFamilyId(pFKey);
    const iGresponse = async () => {
      fetch("http://https://backend-ahmed-shehata-crm.onrender.com/api/item_groups/names/" + pFKey, {
        method: "GET",
        headers: new Headers({
          Authorization: "bearer " + userData.token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }).then(async (iGResponse) => {
        const newiGData = await iGResponse.json();
        setItemGroup(newiGData);
      });
    };
    iGresponse();
  };

  const handleFormChangeProductCall = (event, index, indexC) => {
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
      supplieronChangeHandler(event);
      let element = document.getElementById(`${index}`);
      element?.setAttribute("style", "background-color : none;");

      let dataP = [...val];
      dataP[index]["supplier"] = event.target.value;
    } else if (event.target.name === "productFamily") {
      ProductFamilyOnCahngeHandler(event);
      let element = document.getElementById(`${index}PF`);
      element?.setAttribute("style", "background-color : none;");
      let dataP = [...val];
      dataP[index]["productFamily"] = event.target.value;
      setVal(dataP);
    } else if (event.target.name === "itemGroup") {
      let element = document.getElementById(`${index}IG`);
      element?.setAttribute("style", "background-color : none;");
      let dataP = [...val];
      dataP[index]["itemGroup"] = event.target.value;
      setVal(dataP);
    } else if (event.target.name === "itemName") {
      let element = document.getElementById(`${index}IN`);
      element?.setAttribute("style", "background-color : none;");
      let dataP = [...val];
      dataP[index]["itemName"] = event.target.value;
      setVal(dataP);
    } else if (event.target.name === "itemStock") {
      let element = document.getElementById(`${index}IS`);
      element?.setAttribute("style", "background-color : none;");
      let dataP = [...val];
      dataP[index]["itemStock"] = event.target.value;
      setVal(dataP);
    } else if (event.target.name === "callObjective") {
      let element = document.getElementById(`${index}CO`);
      element?.setAttribute("style", "background-color : none;");
      let dataP = [...val];
      dataP[index]["callObjective"] = event.target.value;
      setVal(dataP);
    } else if (event.target.name === "callStatus") {
      let element = document.getElementById(`${index}CS`);
      element?.setAttribute("style", "background-color : none;");

      let dataP = [...val];
      dataP[index]["callStatus"] = event.target.value;
      setVal(dataP);
    } else if (event.target.name === "contactPerson") {
      // let element =  document.getElementById(`${indexC}CP`)
      const divElement = elementCPRef.current;
      divElement?.setAttribute("style", "background-color : none;");
      // element.setAttribute("style", "background-color : none;")

      let dataC = [...val];
      dataC[index]["contData"][indexC]["contactPerson"] = event.target.value;
      setVal(dataC);
    } else if (event.target.name === "mobileNumber") {
      // let element =  document.getElementById(`${indexC}MN`)
      // element.setAttribute("style", "background-color : none;")

      const divElement = elementMNRef.current;
      divElement?.setAttribute("style", "background-color : none;");

      let dataC = [...val];
      dataC[index]["contData"][indexC]["mobileNumber"] = event.target.value;
      setVal(dataC);
    } else if (event.target.name === "authority") {
      // let element =  document.getElementById(`${indexC}A`)
      // element.setAttribute("style", "background-color : none;")

      const divElement = elementARef.current;
      divElement?.setAttribute("style", "background-color : none;");

      let dataC = [...val];
      dataC[index]["contData"][indexC]["authority"] = event.target.value;
      setVal(dataC);
    } else if (event.target.name === "speciality") {
      // let element =  document.getElementById(`${indexC}S`)
      // element.setAttribute("style", "background-color : none;")

      const divElement = elementSRef.current;
      divElement?.setAttribute("style", "background-color : none;");

      let dataC = [...val];
      dataC[index]["contData"][indexC]["speciality"] = event.target.value;
      setVal(dataC);
    } else if (event.target.name === "position") {
      // let element =  document.getElementById(`${indexC}P`)
      // element.setAttribute("style", "background-color : none;")

      const divElement = elementPRef.current;
      divElement?.setAttribute("style", "background-color : none;");

      let dataC = [...val];
      dataC[index]["contData"][indexC]["position"] = event.target.value;
      setVal(dataC);
    }
    if (event.target.value !== 0) {
      setAlert("");
    }
  };

  const loadingSave = () => {
    return <PreLoader3 />;
  };

  const saveBtnHandler = async (e) => {
    // e.preventDefault()
    loadingSave();
    val.flatMap(async (objP, index) => {
      console.log(
        "objP itemName is : ",
        objP.itemName,
        " and ObJP for itemStock is",
        objP.itemStock
      );
      const postCallProductData = {
        supplier_id: objP.supplier,
        product_family_id: objP.productFamily,
        item_group_id: objP.itemGroup,
        item_name: objP.itemName,
        item_stock: objP.itemStock,
        objective_id: objP.callObjective,
        status_id: objP.callStatus,
        activity_id: activityId,
      };

      // val[index]['contData'].map(async (objPC, indexC)=>{
      //   console.log("contact person save test :",objPC.contactPerson)

      //   let postCallContactData =  {
      //     contact_person:objPC.contactPerson ,
      //     mobile_number:objPC.mobileNumber ,
      //     authority:objPC.authority ,
      //     speciality:objPC.speciality ,
      //     position:objPC.position ,
      //     call_product_id:callProductId ,
      //     activity_id:activityId
      //   }

      //   //  setPostCallContactData(postCallContactData.length !== 0 && postCallContactData)
      //   console.log("postCall contact Data in contatact loop are :", finalPostCallContactData)
      // })

      const res = await fetch("http://https://backend-ahmed-shehata-crm.onrender.com/api/call_products", {
        method: "post",
        headers: new Headers({
          Authorization: "bearer " + userData.token,
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(postCallProductData),
      }).then(async (response) => {
        const res = await response.json();
        console.log("res of call_products are", res);
        const callPID = await res.data.id;
        // setCallProductId(callPID)
        console.log("call product id is ", callPID);

        // val.map((obj, index) => {
        //  const postContactData = {
        //     contact_person: obj.contactPerson,
        //     mobile_number: obj.mobileNumber,
        //     authority_id: obj.authority,
        //     speciality_id: obj.speciality,
        //     position_id: obj.position,
        //     call_product_id: res.data.id,
        //     activity_id: activityId,
        //     account_id: accountId
        //   }

        // val[index]['contData'].

        objP.contData.map((objPC, indexC) => {
          console.log("contact person save test :", objPC.contactPerson);

          let postCallContactData = {
            contact_person: objPC.contactPerson,
            mobile_number: objPC.mobileNumber,
            authority_id: objPC.authority,
            speciality_id: objPC.speciality,
            position_id: objPC.position,
            call_product_id: callPID,
            activity_id: activityId,
            account_id: accountId,
          };

          console.log("objP in cont scope are :", objP);

          //  setPostCallContactData(postCallContactData.length !== 0 && postCallContactData)
          console.log(
            "postCall contact Data in contatact loop are :",
            postCallContactData
          );

          const postCallContact = async () => {
            await fetch("http://https://backend-ahmed-shehata-crm.onrender.com/api/call_contacts", {
              method: "post",
              headers: new Headers({
                Authorization: "bearer " + userData.token,
                "Content-Type": "application/json",
              }),
              body: JSON.stringify(postCallContactData),
            }).then(async (response) => {
              const res = await response.json();

              console.log("res of call_contacts are", res);

              if (res.data.id > 0) {
                setSaveSuccessMsg("The Activity was Save Susssfully");
                setTimeout(() => setSaveSuccessMsg(""), 3000);
              }
            });
          };
          postCallContact();
        });

        //  })
      });
    });
  };

  const addContactBtn = (event, index) => {
    event.preventDefault();

    xCount += 1;
    setXcount(xCount);
    setIndexP(index);
    let NewContactCallRow = {
      contactPerson: "",
      mobileNumber: "",
      authority: "",
      speciality: "",
      position: "",
    };
    let contLength = val[index]["contData"].length;
    if (
      val[index]["contData"][contLength - 1].contactPerson !== "" &&
      val[index]["contData"][contLength - 1].mobileNumber !== "" &&
      mNRegex.test(val[index]["contData"][contLength - 1].mobileNumber) &&
      val[index]["contData"][contLength - 1].authority != 0 &&
      val[index]["contData"][contLength - 1].speciality != 0 &&
      val[index]["contData"][contLength - 1].position != 0
    ) {
      xCount > 0 &&
        xCount < 31 &&
        val[index]["contData"].push(NewContactCallRow);
    }

    if (val[index]["contData"][contLength - 1].contactPerson === "") {
      //  event.currentTarget.className = `${hTabs.dropDownPErr}`
      const divElement = elementCPRef.current;
      console.log("Contact Person Element is :", divElement);
      divElement?.setAttribute("style", "background-color : red;");
    } else {
      const divElement = elementCPRef.current;
      divElement?.setAttribute("style", "background-color : none;");
    }

    if (
      val[index]["contData"][contLength - 1].mobileNumber === "" ||
      !mNRegex.test(val[index]["contData"][contLength - 1].mobileNumber)
    ) {
      //  event.currentTarget.className = `${hTabs.dropDownPErr}`
      const divElement = elementMNRef.current;
      console.log("Contact Person Element is :", divElement);
      divElement?.setAttribute("style", "background-color : red;");
    } else {
      const divElement = elementMNRef.current;
      divElement?.setAttribute("style", "background-color : none;");
    }

    if (val[index]["contData"][contLength - 1].authority == 0) {
      //  event.currentTarget.className = `${hTabs.dropDownPErr}`
      const divElement = elementARef.current;
      console.log("Contact Person Element is :", divElement);
      divElement?.setAttribute("style", "background-color : red;");
    } else {
      const divElement = elementARef.current;
      divElement?.setAttribute("style", "background-color : none;");
    }

    if (val[index]["contData"][contLength - 1].speciality == 0) {
      //  event.currentTarget.className = `${hTabs.dropDownPErr}`
      const divElement = elementSRef.current;
      console.log("Contact Person Element is :", divElement);
      divElement?.setAttribute("style", "background-color : red;");
    } else {
      const divElement = elementSRef.current;
      divElement?.setAttribute("style", "background-color : none;");
    }

    if (val[index]["contData"][contLength - 1].position == 0) {
      //  event.currentTarget.className = `${hTabs.dropDownPErr}`
      const divElement = elementPRef.current;
      console.log("Contact Person Element is :", divElement);
      divElement?.setAttribute("style", "background-color : red;");
    } else {
      const divElement = elementPRef.current;
      divElement?.setAttribute("style", "background-color : none;");
    }

    // &&
    // val[index]['contData'][contLength - 1].mobileNumber !== '' &&
    // val[index]['contData'][contLength - 1].authority !== 0 &&
    // val[index]['contData'][contLength - 1].speciality !== 0 &&
    // val[index]['contData'][contLength - 1].position !== 0 )
  };

  useEffect(() => {
    if (IndexP > 0 && indexCont > 0 && indexCont < 31) {
      consoel.log("xCount is :", xCount);
    }
  }, [xCount]);

  const deleteContactBtn = (event, index) => {
    event.preventDefault();
    xDCount += 1;

    setXDCount(xDCount);
    if (val[index]["contData"].length > 1) {
      val[index]["contData"].pop();
    }
  };

  useEffect(() => {
    if (IndexPD > 0 && xDCount > 0 && IndexContD < 20) {
      console.log("xDCount is", xDCount);
    }
  }, [xDCount]);

  useEffect(() => {
    const validateCustomAccordion = () => {
      console.log(
        "testing for validateCustomAccordion ...customAcorCount is ",
        customAcorCount
      );

      let contLength = val[val.length - 1]["contData"].length;

      if (val[val.length - 1].supplier == 0) {
        const divElement = eSupplierRef?.current;
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = eSupplierRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1].productFamily == 0) {
        const divElement = ePFRef?.current;
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = ePFRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1].itemGroup == 0) {
        const divElement = eIGRef?.current;
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = eIGRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1].callObjective == 0) {
        const divElement = eCORef?.current;
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = eCORef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1].callStatus == 0) {
        const divElement = eCSRef?.current;
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = eCSRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (
        val[val.length - 1]["contData"][contLength - 1].contactPerson === ""
      ) {
        //  event.currentTarget.className = `${hTabs.dropDownPErr}`
        const divElement = elementCPRef?.current;
        console.log("Contact Person Element is :", divElement);
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = elementCPRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      let mobileValue =
        val[val.length - 1]["contData"][contLength - 1].mobileNumber;
      if (
        mobileValue === "" ||
        !mNRegex.test(
          val[val.length - 1]["contData"][contLength - 1].mobileNumber
        )
      ) {
        //  event.currentTarget.className = `${hTabs.dropDownPErr}`
        const divElement = elementMNRef?.current;
        console.log("Contact Person Element is :", divElement);
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = elementMNRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1]["contData"][contLength - 1].authority == 0) {
        //  event.currentTarget.className = `${hTabs.dropDownPErr}`
        const divElement = elementARef?.current;
        console.log("Contact Person Element is :", divElement);
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = elementARef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1]["contData"][contLength - 1].speciality == 0) {
        //  event.currentTarget.className = `${hTabs.dropDownPErr}`
        const divElement = elementSRef?.current;
        console.log("Contact Person Element is :", divElement);
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = elementSRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (val[val.length - 1]["contData"][contLength - 1].position == 0) {
        //  event.currentTarget.className = `${hTabs.dropDownPErr}`
        const divElement = elementPRef?.current;
        console.log("Contact Person Element is :", divElement);
        divElement?.setAttribute("style", "background-color : red;");
      } else {
        const divElement = elementPRef?.current;
        divElement?.setAttribute("style", "background-color : none;");
      }

      if (
        val[val.length - 1].supplier != 0 &&
        val[val.length - 1].productFamily != 0 &&
        val[val.length - 1].itemGroup != 0 &&
        val[val.length - 1].callObjective != 0 &&
        val[val.length - 1].callStatus != 0 &&
        val[val.length - 1]["contData"][contLength - 1].contactPerson !== "" &&
        val[val.length - 1]["contData"][contLength - 1].mobileNumber !== "" &&
        mNRegex.test(
          val[val.length - 1]["contData"][contLength - 1].mobileNumber
        ) &&
        val[val.length - 1]["contData"][contLength - 1].authority != 0 &&
        val[val.length - 1]["contData"][contLength - 1].speciality != 0 &&
        val[val.length - 1]["contData"][contLength - 1].position != 0
      ) {
        saveCustomerInfoCount();
      } else {
        setAlert("❌ Please check your Entries in Red Colored Fields!!!");
        setTimeout(() => setAlert(""), 3000);
      }
    };

    if (customAcorCount > 0) {
      console.log("Validation an save customer info count called");
      validateCustomAccordion();
    }
  }, [customAcorCount]);

  const saveCustomerInfoCount = () => {
    setSavCustomerCont((current) => current + 1);
  };

  useEffect(() => {
    if (finalCustomAccordCount > 0) {
      console.log("Final Custom Accordion Function for saveing Called");
      saveBtnHandler();
    }
  }, [finalCustomAccordCount]);

  console.log("Final Val :: ", val);

  return (
    <div className={hTabs.AccordionPosition}>
      <span className={hTabs.errSpan}>
        {alret}
        {saveSuccessMsg}
      </span>
      {/* <PreLoader3/> */}
      <Accordion
        expanded={expanded === `panel99`}
        onChange={handleChange(`panel99`)}
        className={hTabs.accordion}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className={hTabs.accordionSummary}
        >
          <Typography style={{ color: "black" }} variant="h5">
            Activity Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomerInfoAccordion
            setCustomAcorCount={setCustomAcorCount}
            saveCount={saveCount}
            setAccountIdPass={setAccountIdPass}
            setActivityId={setActivityId}
            displayPass={displayPass}
            savCustomerCont={savCustomerCont}
            setFinalCustomAccordCount={setFinalCustomAccordCount}
            setCountSavCmrToCusAccor={setCountSavCmrToCusAccor}
            setCountSavCmrToCusAccorC={setCountSavCmrToCusAccorC}
          />
        </AccordionDetails>
      </Accordion>

      {val.map((data, index) => {
        return (
          <div key={index}>
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              className={displayAccordion}
              id={hTabs.CallInfoAccordion}
            >
              <AccordionSummary aria-controls="panel1d-content">
                <Typography style={{ color: "black" }} variant="h5">
                  Call Information
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Fragment>
                  <form
                    onSubmit={() =>
                      console.log("CustomizedAccordion form was submitted")
                    }
                    // onSubmit={ ()=> 1 === 2 && saveBtnHandler}
                    id="CallInfoAccordion"
                  >
                    <div role="tabpanel">
                      <label className={hTabs.CallLable}>Product Details</label>
                      <div className={hTabs.productBox}>
                        <label className={hTabs.minLable}>Supplier</label>
                        <select
                          name="supplier"
                          value={data.supplier}
                          // className={`${errAccountName ? hTabs.dropDownErr : hTabs.inputNameList} ${displayAccountsData}`}
                          className={
                            errSupplier
                              ? hTabs.dropDownPErr
                              : hTabs.productBoxSelect
                          }
                          id={index}
                          onChange={(event) =>
                            handleFormChangeProductCall(event, index)
                          }
                          ref={eSupplierRef}
                        >
                          <option value="0" hidden>
                            Select Supplier
                          </option>
                          {SupplierName &&
                            SupplierName.length > 0 &&
                            SupplierName.map((userObj, index) => (
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
                          value={data.productFamily}
                          onChange={(event) =>
                            handleFormChangeProductCall(event, index)
                          }
                          id={`${index}PF`}
                          ref={ePFRef}
                        >
                          <option value="0" hidden>
                            Select Family
                          </option>
                          {ProductFamily &&
                            ProductFamily.length > 0 &&
                            ProductFamily.map((userObj, index) => (
                              <option value={userObj.id} key={userObj.id}>
                                {userObj.product_family}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className={hTabs.productBox}>
                        <label className={hTabs.minLable}>Item Group</label>
                        <select
                          className={hTabs.productBoxSelect}
                          name="itemGroup"
                          value={data.itemGroup}
                          onChange={(event) =>
                            handleFormChangeProductCall(event, index)
                          }
                          id={`${index}IG`}
                          ref={eIGRef}
                        >
                          <option value="0" hidden>
                            Select Item
                          </option>
                          {ItemGroup &&
                            ItemGroup.length > 0 &&
                            ItemGroup.map((userObj, index) => (
                              <option value={userObj.id} key={userObj.id}>
                                {userObj.item_group}
                              </option>
                            ))}
                        </select>
                      </div>

                      {key === 4 ? (
                        <>
                          <div className={hTabs.productBox}>
                            <label className={hTabs.minLable}>Item Name</label>
                            <input
                              name="itemName"
                              value={data.itemName}
                              onChange={(event) =>
                                handleFormChangeProductCall(event, index)
                              }
                              type="text"
                              className={hTabs.productBoxSelect}
                              id={`${index}IN`}
                              ref={eINRef}
                            ></input>
                          </div>
                          <div className={hTabs.productBox}>
                            <label className={hTabs.minLable}>Item Stock</label>
                            <input
                              name="itemStock"
                              value={data.itemStock}
                              onChange={(event) =>
                                handleFormChangeProductCall(event, index)
                              }
                              type="tel"
                              className={hTabs.productBoxSelect}
                              id={`${index}IS`}
                              ref={eISRef}
                              maxLength="11"
                            ></input>
                          </div>
                        </>
                      ) : null}

                      <div className={hTabs.productBox}>
                        <label className={hTabs.minLable}>Call Objective</label>
                        <select
                          className={hTabs.productBoxSelect}
                          name="callObjective"
                          value={data.callObjective}
                          onChange={(event) =>
                            handleFormChangeProductCall(event, index)
                          }
                          id={`${index}CO`}
                          ref={eCORef}
                        >
                          <option value="0" hidden>
                            Select Objective
                          </option>
                          <option value="1">Product Introduction</option>
                          <option value="2">Product Upgrade</option>
                          <option value="3">Product Retention</option>
                          <option value="4">Product Conversion</option>
                          <option value="5">Product Demonstration</option>
                          <option value="6">Repair/Exchange</option>
                          <option value="7">Tray Audit</option>
                          <option value="8">Tender Specs</option>
                          <option value="9">Submit Offer</option>
                        </select>
                      </div>
                      <div className={hTabs.productBox}>
                        <label className={hTabs.minLable}>Call Status</label>
                        <select
                          className={hTabs.productBoxSelect}
                          name="callStatus"
                          value={data.callStatus}
                          onChange={(event) =>
                            handleFormChangeProductCall(event, index)
                          }
                          id={`${index}CS`}
                          ref={eCSRef}
                        >
                          <option value="0" hidden>
                            Select Status
                          </option>
                          <option value="1">New Opportunity</option>
                          <option value="2">Current Opportunity</option>
                          <option value="3">Pending Opportunity</option>
                          <option value="4">Won</option>
                          <option value="5">Lost</option>
                        </select>
                      </div>

                      <label className={hTabs.CallLable}>
                        Customer Information
                      </label>

                      <div>
                        {xCount > 0 &&
                          val[index]["contData"].map((dataC, indexC) => {
                            {
                              () => setIndexCont(indexC);
                            }
                            {
                              () => setIndexContD(indexC);
                            }

                            return (
                              <div key={indexC}>
                                <div className={hTabs.productBox}>
                                  <label className={hTabs.minLable}>
                                    Contact person
                                  </label>
                                  <input
                                    name="contactPerson"
                                    value={dataC.contactPerson}
                                    onChange={(event) =>
                                      handleFormChangeProductCall(
                                        event,
                                        index,
                                        indexC
                                      )
                                    }
                                    type="text"
                                    className={hTabs.productBoxSelect}
                                    id={`${indexC}CP`}
                                    ref={elementCPRef}
                                  ></input>
                                </div>

                                <div className={hTabs.productBox}>
                                  <label className={hTabs.minLable}>
                                    Mobile Number
                                  </label>
                                  <input
                                    name="mobileNumber"
                                    value={dataC.mobileNumber}
                                    onChange={(event) =>
                                      handleFormChangeProductCall(
                                        event,
                                        index,
                                        indexC
                                      )
                                    }
                                    type="tel"
                                    className={hTabs.productBoxSelect}
                                    id={`${indexC}MN`}
                                    ref={elementMNRef}
                                    maxLength="11"
                                  ></input>
                                </div>

                                <div className={hTabs.productBox}>
                                  <label className={hTabs.minLable}>
                                    Authority
                                  </label>
                                  <select
                                    name="authority"
                                    value={dataC.authority}
                                    onChange={(event) =>
                                      handleFormChangeProductCall(
                                        event,
                                        index,
                                        indexC
                                      )
                                    }
                                    className={hTabs.productBoxSelect}
                                    id={`${indexC}A`}
                                    ref={elementARef}
                                  >
                                    <option value="0" hidden>
                                      Select Authority
                                    </option>
                                    <option value="1">Decision Maker</option>
                                    <option value="2">Influencer</option>
                                    <option value="3">User</option>
                                  </select>
                                </div>
                                <div className={hTabs.productBox}>
                                  <label className={hTabs.minLable}>
                                    Speciality
                                  </label>
                                  <select
                                    name="speciality"
                                    value={dataC.speciality}
                                    onChange={(event) =>
                                      handleFormChangeProductCall(
                                        event,
                                        index,
                                        indexC
                                      )
                                    }
                                    className={hTabs.productBoxSelect}
                                    id={`${indexC}S`}
                                    ref={elementSRef}
                                  >
                                    <option value="0" hidden>
                                      Select Speciality
                                    </option>
                                    <option value="1">Andrology</option>
                                    <option value="2">Anesthesia</option>
                                    <option value="3">Bariatric Surgery</option>
                                    <option value="4">Burn Centers</option>
                                    <option value="5">Cardiology</option>
                                    <option value="6">Cardiothoracic</option>
                                    <option value="7">Chest</option>
                                    <option value="8">
                                      Clinical Pathology
                                    </option>
                                    <option value="9">Dental Surgery</option>
                                    <option value="10">Endocrinology</option>
                                    <option value="11">ENT</option>
                                    <option value="12">ER</option>
                                    <option value="13">General Surgery</option>
                                    <option value="14">GIT</option>
                                    <option value="15">Gynecology</option>
                                    <option value="16">ICU</option>
                                    <option value="17">
                                      Infection Control
                                    </option>
                                    <option value="18">Insurance</option>
                                    <option value="19">
                                      Internal Medicine
                                    </option>
                                    <option value="20">Liver Surgery</option>
                                    <option value="21">Maintenance</option>
                                    <option value="22">Neonatal ICU</option>
                                    <option value="23">Neurology</option>
                                    <option value="24">Neurosurgery</option>
                                    <option value="25">Nurse</option>
                                    <option value="26">Oncology</option>
                                    <option value="27">Ophthalmology</option>
                                    <option value="28">Orthopedic</option>
                                    <option value="29">Pharmacist</option>
                                    <option value="30">Plastic Surgery</option>
                                    <option value="31">Purchaser</option>
                                    <option value="32">Spine Surgery</option>
                                    <option value="33">Technician</option>
                                    <option value="34">Transplant</option>
                                    <option value="35">Urology</option>
                                    <option value="36">Vascular</option>
                                    <option value="37">Warehouse</option>
                                    <option value="38">Category Manager</option>
                                    <option value="39">Assistant</option>
                                  </select>
                                </div>

                                <div className={hTabs.productBox}>
                                  <label className={hTabs.minLable}>
                                    Position
                                  </label>
                                  <select
                                    name="position"
                                    value={dataC.position}
                                    onChange={(event) =>
                                      handleFormChangeProductCall(
                                        event,
                                        index,
                                        indexC
                                      )
                                    }
                                    className={hTabs.productBoxSelect}
                                    id={`${indexC}P`}
                                    ref={elementPRef}
                                  >
                                    <option value="0" hidden>
                                      Select Position
                                    </option>
                                    <option value="1">Head Nurse</option>
                                    <option value="2">Head of Warehouse</option>
                                    <option value="3">
                                      Head of Department
                                    </option>
                                    <option value="4">
                                      Head of Operation Room
                                    </option>
                                    <option value="5">
                                      Head of Procurement
                                    </option>
                                    <option value="6">Hospital Director</option>
                                    <option value="7">
                                      Head of Maintenance
                                    </option>
                                    <option value="8">BB Manager</option>
                                    <option value="9">Others</option>
                                  </select>
                                </div>
                              </div>
                            );
                          })}
                      </div>

                      <div className={hTabs.callButtons}>
                        <button
                          className={hTabs.addBtn}
                          id="addContact0"
                          onClick={(event) => addContactBtn(event, index)}
                        >
                          Add Contact
                        </button>
                        <button
                          className={hTabs.deleteBtn}
                          id="deleteContact0"
                          onClick={(event) => deleteContactBtn(event, index)}
                        >
                          Delete Contact
                        </button>
                        {/* <button className={hTabs.addBtn} id="SaveActivity" onClick={saveBtnHandler}>
                          Save
                        </button> */}
                      </div>
                    </div>
                  </form>
                  {/* )

})} */}
                </Fragment>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </div>
  );
}
