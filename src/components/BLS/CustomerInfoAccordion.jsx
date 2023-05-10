/* eslint-disable */
import React, { useState, useContext, useEffect, useRef } from "react";

import { UserContext } from "./Home";

// import { toJSON, fromJSON, stringify } from 'flatted'

import hTabs from "./hTabs.module.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./datepicker.scss";

import { useNavigate } from "react-router-dom";

// import { formControlClasses } from '@mui/material';

// class RecursiveMap extends Map {
//   static fromJSON(any) {
//     return new this(fromJSON(any))
//   }
//   toJSON() {
//     return toJSON([...this.entries()])
//   }
// }
// const recursive = new RecursiveMap()
// const same = {}
// same.same = same
// recursive.set('same', same)

// const asString = JSON.stringify(recursive)
// const asMap = RecursiveMap.fromJSON(JSON.parse(asString))
// asMap.get('same') === asMap.get('same').same

const loadingSaveFun = () => {
  function bgsave() {
    return (
      <div className={hTabs.backgroundSave}>
        <span> Save Test Background </span>
      </div>
    );
  }
  bgsave();
};

export default function customerInfoAccordion({
  displayPass,
  setActivityId,
  setAccountIdPass,
  saveCount,
  setCustomAcorCount,
  savCustomerCont,
  setFinalCustomAccordCount,
  setCountSavCmrToCusAccor,
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [accountName, setAccountName] = useState([]);
  const [accountArea, setAccountArea] = useState("");
  const [displayAccountsData, setDisplayAccountsData] = useState(
    hTabs.hideActivityData
  );
  const [activityType, setActivityType] = useState(0);
  const [accountType, setAccountType] = useState(0);
  const [accountId, setAccountId] = useState(0);
  const [purchaseMethodId, setPurchaseMethodId] = useState(0);

  const [alret, setAlert] = useState("");
  const [valErrDate, setValErrDate] = useState(false);
  const [valErrEndDate, setValErrEndDate] = useState(false);
  const [errActivitySelectType, setErrActivitySelectType] = useState(false);
  const [activityTypeValue, setActivityTypeValue] = useState(0);
  const [errAccountType, setErrAccountType] = useState(false);
  const [errAccountName, setErrAccountName] = useState(false);
  const [errpurchaseMethod, setErrpurchaseMethod] = useState(false);

  const [commentTXT, setComment] = useState("");
  const [commentAlret, setCommetAlret] = useState("");

  const [accountNameValue, setAccountNameValue] = useState("");
  const [clickedAccountName, setclickedAccountName] = useState("");
  const [mainIndex, setMainIndex] = useState(0);

  const [saveSuccessMsg, setSaveSuccessMsg] = useState();

  const [saveDone, setSaveDone] = useState();

  // const navigate = useNavigate()
  // const [countSaveToVTabs,setCountSaveToVTabs] = useState(0)
  const accountNameRef = useRef(null);

  // console.log("key code is ",window.event.keyCode)
  // console.log("saveCount is ...............................  :  ",saveCount)

  // account_type_id: accountType,
  //   account_id: accountId,
  //   purchase_method_id: PurchaseMethodId

  // const activity_date_from = useRef(null)
  // const activity_date_to = useRef(null)
  // const activity_type_id = useRef(null)
  // const account_type_id = useRef(null)
  // const account_id = useRef(null)
  // const purchase_method_id = useRef(null)

  const userData = JSON.parse(useContext(UserContext));
  const key = userData.id;
  console.log(key);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://backend-ahmed-shehata-crm.onrender.com/api/accounts/names/" + key,
        {
          method: "GET",
          headers: new Headers({
            Authorization: "bearer " + userData.token,
            "Content-Type": "application/x-www-form-urlencoded",
          }),
        }
      );
      const newData = await response.json();
      setAccountName(newData);
      console.log(newData);
    };
    fetchData();
  }, []);

  const onSearch = (searchTerm) => {
    setAccountNameValue(searchTerm);
    // setclickedAccountName(searchTerm)
    // our api to fetch the search result
    console.log("search ", searchTerm);

    // const index = accountName.findIndex(async (obj) => await obj.account_name == accountNameValue)

    // console.log('index is ', index)

    // setAccountArea(accountName[index].account_area)
  };

  const accountNameInputOnChange = (event) => {
    setAccountNameValue(event.target.value);

    // const index = accountName.findIndex((object) => {
    //   // console.log("account name from inside findIndex Method is :",accountNameValue)
    //   return object.id == accountNameValue

    //   // selectedValue
    // })

    // const normalIndex = (e) => e == 8;
  };

  const accountNamehandleChange = (event) => {
    // (event.target.value)
    // setAccountArea = (event){
    const selectedValue = event.target.value;
    setAccountId(event.target.value);
    setErrAccountName(false);
    if (
      startDate !== null &&
      endDate !== null &&
      // activityTypeValue !== 0 &&
      accountType !== 0 &&
      // accountId !== 0 &&
      purchaseMethodId !== 0
    ) {
      setAlert("");
    }
    //
    //
    //
    //
    // }
    // const arr = [{id: 'a'}, {id: 'b'}, {id: 'c'}];

    const index = accountName.findIndex((object) => {
      // console.log("account name from inside findIndex Method is :",accountNameValue)
      return object.id == accountNameValue;

      // selectedValue
    });

    console.log("index is ", index);

    setAccountArea(accountName[index].account_area);
  };

  console.log(accountArea);

  const activityTypehandleChange = (event) => {
    const value = event.target.value;
    setActivityTypeValue(value);
    setErrActivitySelectType(false);
    if (
      startDate !== null &&
      endDate !== null
      //  && activityTypeValue !== 0 &&
      // accountType !== 0 &&
      // accountId !== 0 &&
      //  purchaseMethodId !== 0
    ) {
      setAlert("");
    }

    setActivityType(value);
    console.log(value);
    if (
      value === "1" ||
      value === "2" ||
      value === "3" ||
      value === "4" ||
      value === "5"
    ) {
      setDisplayAccountsData(hTabs.displayActivityData);
      displayPass(hTabs.callInfoAccordionBlock);
    } else {
      setDisplayAccountsData(hTabs.hideActivityData);
      displayPass(hTabs.callInfoAccordionhidden);
    }
  };

  const accountTypeOnChange = (event) => {
    setAccountType(event.target.value);
    setErrAccountType(false);
    if (
      startDate !== null &&
      endDate !== null &&
      // activityTypeValue !== 0 &&
      // accountType !== 0 &&
      accountId !== 0 &&
      purchaseMethodId !== 0
    ) {
      setAlert("");
    }
  };

  const purchaseMethodIdOnChange = (event) => {
    setPurchaseMethodId(event.target.value);
    setErrpurchaseMethod(false);
    if (
      startDate !== null &&
      endDate !== null &&
      // activityTypeValue !== 0 &&
      accountType !== 0 &&
      accountId !== 0
      //  && purchaseMethodId !== 0
    ) {
      setAlert("");
    }
  };

  const saveBtnHandler = async (e) => {
    // e.preventDefault()
    let postData = {};

    if (
      activityTypeValue === "6" ||
      activityTypeValue === "7" ||
      activityTypeValue === "8" ||
      activityTypeValue === "9" ||
      activityTypeValue === "10" ||
      activityTypeValue === "11" ||
      activityTypeValue === "12" ||
      activityTypeValue === "13" ||
      activityTypeValue === "14" ||
      activityTypeValue === "15"
    ) {
      postData = {
        user_id: userData.id,
        bl_id: userData.bl1_id,
        bu_id: userData.bu_id,
        activity_date_from: startDate,
        activity_date_to: endDate,
        activity_type_id: activityType,
        comment: commentTXT,
        //  account_type_id: 0,
        //  account_id: 0,
        //  purchase_method_id: 0
      };
    } else if (
      endDate === null &&
      (activityTypeValue === "6" ||
        activityTypeValue === "7" ||
        activityTypeValue === "8" ||
        activityTypeValue === "9" ||
        activityTypeValue === "10" ||
        activityTypeValue === "11" ||
        activityTypeValue === "12" ||
        activityTypeValue === "13" ||
        activityTypeValue === "14" ||
        activityTypeValue === "15")
    ) {
      postData = {
        user_id: userData.id,
        bl_id: userData.bl1_id,
        bu_id: userData.bu_id,
        activity_date_from: startDate,
        // activity_date_to: endDate,
        activity_type_id: activityType,
        comment: commentTXT,
        //  account_type_id: 0,
        //  account_id: 0,
        //  purchase_method_id: 0
      };
    } else if (
      endDate === null &&
      (activityTypeValue === "1" ||
        activityTypeValue === "2" ||
        activityTypeValue === "3" ||
        activityTypeValue === "4" ||
        activityTypeValue === "5")
    ) {
      postData = {
        user_id: userData.id,
        bl_id: userData.bl1_id,
        bu_id: userData.bu_id,
        activity_date_from: startDate,
        // activity_date_to: endDate,
        activity_type_id: activityType,
        account_type_id: accountType,
        account_id: accountId,
        purchase_method_id: purchaseMethodId,
        comment: commentTXT,
      };
    } else {
      postData = {
        user_id: userData.id,
        bl_id: userData.bl1_id,
        bu_id: userData.bu_id,
        activity_date_from: startDate,
        activity_date_to: endDate,
        activity_type_id: activityType,
        account_type_id: accountType,
        account_id: accountId,
        purchase_method_id: purchaseMethodId,
        comment: commentTXT,
      };

      //   {
      //     "user_id": 10,
      //   "bl_id": 2,
      //   "bu_id": 1,
      //   "activity_date_from": "2022-10-10",
      //   "activity_date_to": "2022-10-10",
      //   "activity_type_id": 9,
      //   "account_type_id": 1,
      //   "account_id": 19,
      //   "purchase_method_id": 1,
      //   "comment":"Hello this is a new comment for testing only as we will issue the as we speak we can go throth for testing to detect if the new module of comment is working ine or not"
      // }

      // 16370427

      // 16370409
    }

    console.log(JSON.stringify(postData));
    // useEffect(async () =>{
    // try {
    const res = await fetch("https://backend-ahmed-shehata-crm.onrender.com/api/activities", {
      method: "post",
      headers: new Headers({
        Authorization: "bearer " + userData.token,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(postData),
      // body: toJSON(postData)
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'x-access-token': 'token-value'
      //   },
      //   body: JSON.stringify(postData)
    }).then(async (response) => {
      const serverResponse = await response.json();
      console.log(
        "Activity Was Saved Successfully ,activity id is : ",
        serverResponse.data.id
      );

      let postDataProduct = {
        // supplier_id: 0,
        // product_family_id: 0,
        // item_group_id: 0,
        // objective_id: 0,
        // status_id: 0,
        activity_id: serverResponse.data.id,
      };

      if (serverResponse.data.id > 0 && activityTypeValue < 6) {
        setCountSavCmrToCusAccor((current) => current + 1);
        // setTimeout(()=>navigate('/home'),5000)
        // navigate('customerinfo', { screen: 'CommunityReply' });
        // navigate('/Developer', {
        //   state: {
        //     position: res.data.position
        //   },
        //   replace: true
        // })

        // setSaveSuccessMsg("The Activity was Save Susssfully")
        // setTimeout(()=>setSaveSuccessMsg(""),3000)
      } else {
        const res = await fetch("https://backend-ahmed-shehata-crm.onrender.com/api/call_products", {
          method: "post",
          headers: new Headers({
            Authorization: "bearer " + userData.token,
            "Content-Type": "application/json",
          }),
          body: JSON.stringify(postDataProduct),
        }).then(async (response) => {
          const res = await response.json();
          const callPID = await res.data.id;

          let postDataContact = {
            contact_person: "",
            mobile_number: "",
            // authority_id : 0 ,
            // speciality_id : 0 ,
            // position_id : 0 ,
            call_product_id: callPID,
            activity_id: serverResponse.data.id,
            // account_id : 0
          };

          const postCallContact = async () => {
            await fetch("https://backend-ahmed-shehata-crm.onrender.com/api/call_contacts", {
              method: "post",
              headers: new Headers({
                Authorization: "bearer " + userData.token,
                "Content-Type": "application/json",
              }),
              body: JSON.stringify(postDataContact),
            })
              .then(async (response) => {
                const res = await response.json();

                console.log("the call contact null was post");
              })
              .then(() => {
                setCountSavCmrToCusAccor((current) => current + 1);
                console.log("LoadingSave Function was called");
              });
          };
          postCallContact();
        });
      }

      setActivityId(serverResponse.data.id);
      setAccountIdPass(accountId);
    });

    // }),[]

    // if (!res.ok) {
    //   const message = `An error has occured: ${res.status} - ${res.statusText}`
    //   throw new Error(message)
    // }
  };

  // const loadingSaveFun = () =>{
  //   return (
  //     <div className={hTabs.backgroundSave}>

  //       </div>
  //   )
  // }

  const onChangeDatePicker = (date) => {
    setStartDate(date);

    setValErrDate(false);

    if (
      // startDate !== null &&
      endDate !== null &&
      activityTypeValue !== 0
      // accountType !== 0 &&
      // accountId !== 0 &&
      //  purchaseMethodId !== 0
    ) {
      setAlert("");
    }
  };

  const onChangeEndDatePicker = (data) => {
    setEndDate(data);
    setValErrEndDate(false);
    if (
      startDate !== null &&
      //  endDate !== null &&
      activityTypeValue !== 0
      //  && accountType !== 0 &&
      //  accountId !== 0 &&
      //  purchaseMethodId !== 0
    ) {
      setAlert("");
    }
  };

  useEffect(() => {
    const handelSubmit = () => {
      // e.preventDefault()
      // console.log("start Date length is : ",startDate)

      if (startDate === null) {
        setValErrDate(true);
        setAlert("❌ Please check your Entries in Red Colored Fields!!!");
      } else {
        setValErrDate(false);
      }

      if (endDate === null) {
        setValErrEndDate(true);
        setAlert("❌ Please check your Entries in Red Colored Fields!!!");
      } else {
        setValErrEndDate(false);
      }

      if (activityTypeValue === 0) {
        setErrActivitySelectType(true);
        setAlert("❌ Please check your Entries in Red Colored Fields!!!");
      } else {
        setErrActivitySelectType(false);
      }

      if (
        accountType === 0 &&
        (activityTypeValue === "1" ||
          activityTypeValue === "2" ||
          activityTypeValue === "3" ||
          activityTypeValue === "4" ||
          activityTypeValue === "5")
      ) {
        setErrAccountType(true);
        setAlert("❌ Please check your Entries in Red Colored Fields!!!");
      } else {
        setErrAccountType(false);
      }

      if (
        (accountId === 0 ||
          accountId == "" ||
          accountNameRef.current.value == "") &&
        (activityTypeValue === "1" ||
          activityTypeValue === "2" ||
          activityTypeValue === "3" ||
          activityTypeValue === "4" ||
          activityTypeValue === "5")
      ) {
        setErrAccountName(true);
        setAlert("❌ Please check your Entries in Red Colored Fields!!!");
      } else {
        setErrAccountName(false);
      }

      if (
        purchaseMethodId === 0 &&
        (activityTypeValue === "1" ||
          activityTypeValue === "2" ||
          activityTypeValue === "3" ||
          activityTypeValue === "4" ||
          activityTypeValue === "5")
      ) {
        setErrpurchaseMethod(true);
        setAlert("❌ Please check your Entries in Red Colored Fields!!!");
      } else {
        setErrpurchaseMethod(false);
      }

      console.log("pre check value is ", checked);

      switch (checked) {
        case false:
          // code block
          if (
            startDate !== null &&
            //  && endDate !== null
            (activityTypeValue === "6" ||
              activityTypeValue === "7" ||
              activityTypeValue === "8" ||
              activityTypeValue === "9" ||
              activityTypeValue === "10" ||
              activityTypeValue === "11" ||
              activityTypeValue === "12" ||
              activityTypeValue === "13" ||
              activityTypeValue === "14" ||
              activityTypeValue === "15")
          ) {
            console.log(
              `check ${checked} is Save Button validation false from 6 to 13 Pressed and called save Function`
            );
            //  validateCustomAccordionCount()
            saveBtnHandler();
          } else if (
            startDate !== null &&
            (activityTypeValue === "1" ||
              activityTypeValue === "2" ||
              activityTypeValue === "3" ||
              activityTypeValue === "4" ||
              activityTypeValue === "5") &&
            accountType !== 0 &&
            accountId !== 0 &&
            accountNameRef.current.value != "" &&
            purchaseMethodId !== 0
          ) {
            validateCustomAccordionCount();
            // saveBtnHandler()
            console.log(
              `check ${checked} Save Button with checkbox validation false from 1 to 5 Pressed and called save Function`
            );
          }

          break;
        case true:
          // code block

          if (
            startDate !== null &&
            endDate !== null &&
            //  && endDate !== null
            (activityTypeValue === "6" ||
              activityTypeValue === "7" ||
              activityTypeValue === "8" ||
              activityTypeValue === "9" ||
              activityTypeValue === "10" ||
              activityTypeValue === "11" ||
              activityTypeValue === "12" ||
              activityTypeValue === "13" ||
              activityTypeValue === "14" ||
              activityTypeValue === "15")
          ) {
            console.log(
              `check ${checked} Save Button validation True (startDate !== null  && endDate !== null) from 6 to 13 Pressed and called save Function`
            );
            // validateCustomAccordionCount()
            saveBtnHandler();
          } else if (
            startDate !== null &&
            endDate !== null &&
            (activityTypeValue === "1" ||
              activityTypeValue === "2" ||
              activityTypeValue === "3" ||
              activityTypeValue === "4" ||
              activityTypeValue === "5") &&
            accountType !== 0 &&
            accountId !== 0 &&
            accountNameRef.current.value != "" &&
            purchaseMethodId !== 0
          ) {
            validateCustomAccordionCount();
            // saveBtnHandler()
            console.log(
              `check ${checked} Save Button with checkbox validation True (startDate !== null  && endDate !== null) from 1 to 5 Pressed and called save Function`
            );
          }
          break;
        default:
          console.log("Final check value is ", checked);
      }
    };

    // validation Customer info section
    if (saveCount > 0) {
      handelSubmit();
      console.log("save count indide the useEffect is ......:", saveCount);
    }
  }, [saveCount]);

  const validateCustomAccordionCount = () => {
    setCustomAcorCount((current) => current + 1);
  };

  const onClickCheckBoxHandler = () => {
    let chkbox = document.querySelector("#toDateCheckBox");
    setChecked(!checked);
    if (!checked) {
      chkbox.setAttribute("disabled", "disabled");
    }
  };

  const commentTxtOnChange = (e) => {
    if (e.target.value.length === 250) {
      setCommetAlret(
        "You've reached the max length of the Text area (250 Characters)"
      );
    }

    setComment(e.target.value.replace(/(\r\n|\n|\r)/gm, ""));
  };

  const accountNameOnClick = (event) => {};

  const onClickElementFun = (e, objAccountName, i, mapIndex, mainIndex) => {
    e.preventDefault();
    onSearch(objAccountName);

    const index = accountName.findIndex((obj) => obj.id == i);

    console.log("index of maping the :", index);

    // console.log('index of Map is ', mapIndex)
    // console.log("index of account name itself : ",i)
    // console.log("main Index is ",mainIndex)

    // console.log("account name index for area Test ", accountName[3].id)

    setAccountArea(accountName[index].account_area);

    setAccountId(accountName[index].id);
    setErrAccountName(false);
    if (
      startDate !== null &&
      endDate !== null &&
      // activityTypeValue !== 0 &&
      accountType !== 0 &&
      // accountId !== 0 &&
      purchaseMethodId !== 0
    ) {
      setAlert("");
    }
  };

  useEffect(() => {
    async function fetchData() {
      // You can await here

      console.log(
        "Final Save Function for Customer Info was called and save count indide the useEffect of Saving Data is ......:",
        savCustomerCont
      );
      await saveBtnHandler().then(() =>
        setFinalCustomAccordCount((current) => current + 1)
      );

      // ...
    }
    if (savCustomerCont > 0) {
      console.log(
        "Save Btn Handler of Customer info Called and then Set Fial Custom Accordion Count Called"
      );
      fetchData();
    }
  }, [savCustomerCont]);

  return saveDone ? (
    <div className={hTabs.backgroundSave}>
      <span> The Activity was Save Susssfully</span>
    </div>
  ) : (
    <form
      // method="post"
      // action="/"
      // onSubmit={handelSubmit}
      id="CustomerInfoAccordion"
    >
      <span className={hTabs.errSpan}>
        {alret}
        {saveSuccessMsg}
      </span>
      <div
        // className="activity-information ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active"
        // id="ui-id-2"
        role="tabpanel"
        // style={{ height: '705.851px' }}
        style={{ position: "relative" }}
      >
        <label className={hTabs.labels}>Activity Date</label>
        <DatePicker
          required
          // ref={activity_date_from}
          dateFormat="yyyy-MM-dd"
          className={valErrDate ? hTabs.valErr : hTabs.calendar}
          selected={startDate}
          onChange={(date) => onChangeDatePicker(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />

        <input
          type="checkbox"
          className={hTabs.checkBox}
          id="toDateCheckBox"
          name="toDateCheckBox"
          value="Bike"
          onClick={onClickCheckBoxHandler}
          defaultChecked={checked}
        ></input>
        <label className={hTabs.labels}>To Date</label>
        {checked ? (
          <DatePicker
            required
            // ref={activity_date_to}
            id="toDatePicker"
            dateFormat="yyyy-MM-dd"
            className={valErrEndDate ? hTabs.valErr : hTabs.calendar}
            selected={endDate}
            onChange={(date) => onChangeEndDatePicker(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        ) : (
          <div></div>
        )}
        <label className={hTabs.labels}>Activity Type</label>

        <select
          required
          // ref={activity_type_id}
          className={
            errActivitySelectType ? hTabs.dropDownErr : hTabs.dropDownList
          }
          id="activityType"
          name="activityType"
          onChange={activityTypehandleChange}
        >
          <option value="0" disabled selected hidden>
            Select Type
          </option>
          <option value="1">Field Visit</option>
          <option value="2">Joint Visit</option>
          <option value="3">Group Meeting</option>
          <option value="4">Workshop</option>
          <option value="5">Live Surgery</option>
          <option value="6">Tender</option>
          <option value="7">UPA</option>
          <option value="8">Installation/Delivery/DSO</option>
          <option value="9">Conference</option>
          <option value="10">Office Work</option>
          <option value="11">Office Meeting</option>
          <option value="12">Office Training</option>
          <option value="13">Sick Leave</option>
          <option value="14">Annual Leave</option>
          <option value="15">Healthy Day</option>
        </select>

        {/* <div
              className={displayAccountsData}
               > */}
        <label className={`${hTabs.labels} ${displayAccountsData}`}>
          Account Type
        </label>
        <select
          // {...displayAccountsData === hTabs.displayActivityData ? "required" : console.log(displayAccountsData) }
          // ref={account_type_id}
          className={`${
            errAccountType ? hTabs.dropDownErr : hTabs.dropDownList
          } ${displayAccountsData}`}
          id="activityType"
          name="activityType"
          onChange={accountTypeOnChange}
        >
          <option value="0" disabled selected hidden>
            Select Type
          </option>
          <option value="1">Hospitals</option>
          <option value="2">Medical Shops</option>
          <option value="3">Pharmacy Chains</option>
          <option value="4">Pharmacy Individual</option>
          <option value="5">Private Customer</option>
          <option value="6">Distributor</option>
        </select>

        <label className={`${hTabs.labels} ${displayAccountsData}`}>
          Account Name    (please search for the account c,w,s,...)
        </label>
        {/* </label> */}

        <input
          className={`${
            errAccountName ? hTabs.dropDownErr : hTabs.inputNameList
          } ${displayAccountsData}`}
          type="text"
          value={accountNameValue}
          onChange={accountNameInputOnChange}
          onClick={accountNameOnClick}
          ref={accountNameRef}
        />

        {/* {accountName &&
                accountName.length > 0 &&
                accountName.map((userObj, index) => (
                  <div 
                  className={`${hTabs.dropDownList} ${displayAccountsData}`}
                  value={userObj.id} key={userObj.id}>
                    {userObj.account_name}
                  </div>
                ))} */}

        {/* <div className={`${hTabs.accountNamesdropDownList} ${displayAccountsData}`}>
             {accountName.filter((item) => {
              const searchTerm = accountNameValue.toLowerCase();
              console.log("item is :",item)
              const fullName = item.account_name.toLowerCase();


              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 15)
            .map((obj)=>{
              return (
              
               <div
                
                onClick={() => onSearch(obj.account_name)}
                className={hTabs.accountNamesItems}
                key={obj.id}
              >
                {obj.account_name}
              </div>
            )})}     
           </div> */}

        {/* ${displayAccountsData} */}
        <div
          className={`${hTabs.accountNamesdropDownList}
             
             `}
        >
          {accountName
            .filter((item, i) => {
              const searchTerm = accountNameValue.toLowerCase();
              // console.log("item is :",item)
              const fullName = item.account_name.toLowerCase();

              //  setMainIndex(i)
              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            // .slice(0, 15)
            .map((obj, index) => {
              return (
                // <div className={hTabs.dropdownDiv}>

                <div
                  onClick={(e) =>
                    onClickElementFun(
                      e,
                      obj.account_name,
                      obj.id,
                      index,
                      mainIndex
                    )
                  }
                  className={hTabs.dropdownDiv}
                  key={obj.id}
                >
                  {obj.account_name}
                  {/* </div> */}
                </div>
              );
            })}
        </div>

        {/* <select
            
              className={`${errAccountName ? hTabs.dropDownErr : hTabs.dropDownList} ${displayAccountsData}`}
            
              id="accountNameList"
              name="accountNameList"
              onChange={accountNamehandleChange}
            >
              <option value="0"  disabled selected hidden>
                Select Account
              </option>
              {accountName &&
                accountName.length > 0 &&
                accountName.map((userObj, index) => (
                  <option  value={userObj.id} key={userObj.id}>
                    {userObj.account_name}
                  </option>
                ))}
            </select> */}

        <label className={`${hTabs.adressLabel} ${displayAccountsData}`}>
          Account Address / Branch
        </label>
        <input
          disabled
          className={`${hTabs.adress_text_Box} ${displayAccountsData}`}
          type="text"
          value={accountArea}
        ></input>

        <label
          id="purchaseLabel"
          className={`${hTabs.labels} ${displayAccountsData}`}
        >
          Purchase Method
        </label>
        <select
          //  {...displayAccountsData === hTabs.displayActivityData ? required : console.log(displayAccountsData) }
          // ref={purchase_method_id}
          id="purchaseMethod"
          name="purchaseMethod"
          className={`${
            errpurchaseMethod ? hTabs.dropDownErr : hTabs.dropDownList
          } ${displayAccountsData}`}
          onChange={purchaseMethodIdOnChange}
        >
          <option value="0" disabled selected hidden>
            Select Method
          </option>
          <option value="1">UPA</option>
          <option value="2">Direct Purchase</option>
          <option value="3">Donation</option>
          <option value="4">Tender</option>
          <option value="5">Medical Shops</option>
          <option value="6">Distributors</option>
          <option value="7">Pharmacies</option>{" "}
        </select>
        {/* 
              </div> */}
        <div>{commentAlret}</div>
        <label className={hTabs.labels}>Comment</label>
        <textarea
          onKeyPressd={(e) => {
            if (e.charCode === 13) e.preventDefault();
          }}
          name="comment"
          spellCheck="false"
          onChange={(event) => commentTxtOnChange(event)}
          className={hTabs.activity_information_textarea}
          maxLength="250"
        ></textarea>

        {/* test Post */}

        {/* saveBtnHandler */}
        {/* <button className={hTabs.addBtn} id="SaveActivity" onClick={handelSubmit}>
              Save
            </button> */}
      </div>
    </form>
  );
}

// const [value, setValue] = useState("");

// const onChange = (event) => {
//   setValue(event.target.value);
// };

// const onSearch = (searchTerm) => {
//   setValue(searchTerm);
//   // our api to fetch the search result
//   console.log("search ", searchTerm);
// };

// return (
//   <div className="App">
//     <h1>Search</h1>

//     <div className="search-container">
//       <div className="search-inner">
//         <input type="text" value={value} onChange={onChange} />
//         <button onClick={() => onSearch(value)}> Search </button>
//       </div>
//       <div className="dropdown">
//         {data
//           .filter((item) => {
//             const searchTerm = value.toLowerCase();
//             const fullName = item.full_name.toLowerCase();

//             return (
//               searchTerm &&
//               fullName.startsWith(searchTerm) &&
//               fullName !== searchTerm
//             );
//           })
//           .slice(0, 10)
//           .map((item) => (
//             <div
//               onClick={() => onSearch(item.full_name)}
//               className="dropdown-row"
//               key={item.full_name}
//             >
//               {item.full_name}
//             </div>
//           ))}
//       </div>
//     </div>
//   </div>
// );
