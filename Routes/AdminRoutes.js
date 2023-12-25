const {getallcutomers,getallsellers,getallfreelancers,getallprojects,getallsellerprojectsbytechnology,
    getallsellerprojects ,getallfreelanceprojectsbytechnology,getallfreelanceprojectsassignedbyid
,getallfreelancecategoriesbyrevenuesort,getallfreelancersbyrevenuesort,getallsellerprojectsbyrevenuesort,
getallfreelanceprojectsuploadedbyid,getallsellerprojectsbyid,gettopfreelancers,Login,gettopsellers,
gettopcustomers,gettopsellerscategories,gettopsellercategoriesbyrevenue,addtechnology,deletetechnology,
gettopfreelancerscategories,disablefreelancer,disablecustomer,disableseller,ablecustomer,ableseller,ablefreelancer,
addadmin,updateuserprofileById,getprofile,changepassword,getallsellerprojectdetailbyid,getcustomerbyid,
getallpurchases} = require("../Controller/AdminController")
const express = require("express");
const { AuthenticateUser } = require("../utils");
const router = express.Router();
router.post("/login"  ,  Login )
router.get("/getallcutomers"  ,  getallcutomers )
router.get("/getallsellers"  ,  getallsellers )
router.get("/getfreelancers"  ,  getallfreelancers )
router.get("/getallfreelanceprojects"  ,  getallprojects )
router.get("/getcustomerbyid/:id"  ,  getcustomerbyid )
router.get("/getallfreelanceprojectsbytechnology/:technology"  ,  getallfreelanceprojectsbytechnology )
// router.get("/getallfreelanceprojectsbybudgetrange/:budget"  ,  getallfreelanceprojectsbytechnology )
router.get("/getallfreelancecategoriesbyrevenuesort"  ,  getallfreelancecategoriesbyrevenuesort )// to be done
router.get("/getallfreelancersbyrevenuesort"  ,  getallfreelancersbyrevenuesort )// to be confirmed/////////////////////
router.get("/getallfreelanceprojectsassignedbyid/:id"  ,  getallfreelanceprojectsassignedbyid )
router.get("/getallfreelanceprojectsuploadedbyid/:id"  ,  getallfreelanceprojectsuploadedbyid )
router.get("/getallsellerprojects"  ,  getallsellerprojects )
router.get("/getallsellerprojectsbytechnology/:technology"  ,  getallsellerprojectsbytechnology )
router.get("/getallsellerprojectsbyrevenuesort"  ,  getallsellerprojectsbyrevenuesort )
router.get("/getallsellerprojectsbyid/:id"  ,  getallsellerprojectsbyid )
router.get("/getallsellerprojectdetailbyid/:id"  ,  getallsellerprojectdetailbyid )
router.get("/getallnotifications"  ,  getallprojects )// to be done
router.get("/getadminrevenuetotal"  ,  getallprojects )// to be done
router.get("/getadminrevenuetotalfreelance"  ,  getallprojects )// to be done
router.get("/getadminrevenuetotalseller"  ,  getallprojects )// to be done
router.get("/gettopfreelancers"  ,  gettopfreelancers )
router.get("/getallpurchases/:id"  ,  getallpurchases )
router.get("/gettopsellers"  ,  gettopsellers )
router.get("/gettopcustomers"  ,  gettopcustomers )
router.get("/gettopsellercategoriesbyrevenue"  ,  gettopsellercategoriesbyrevenue )
router.get("/gettopsellerscategories"  ,  gettopsellerscategories )
router.get("/getprofile" ,AuthenticateUser ,  getprofile )
router.get("/gettopfreelancerscategories"  ,  gettopfreelancerscategories )
router.put("/disablefreelancer"  ,  disablefreelancer )
router.put("/disableseller"  ,  disableseller )
router.put("/disablecustomer"  ,  disablecustomer )
router.put("/ablefreelancer"  ,  ablefreelancer )
router.put("/ableseller"  ,  ableseller )
router.put("/ablecustomer"  ,  ablecustomer )
router.put("/changepassword" ,AuthenticateUser ,  changepassword )
router.delete("/deletesellerproject"  ,  getallprojects )// to be done
router.delete("/deletecustomerproject"  ,  getallprojects )// to be done
router.post("/addtechnology"  ,  addtechnology )
router.delete("/deletetechnology/:id"  ,  deletetechnology )
router.post("/addadmin"  ,  addadmin )
router.patch("/updateprofile",AuthenticateUser , updateuserprofileById)
module.exports = router;