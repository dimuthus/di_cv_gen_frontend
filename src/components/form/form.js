import {React , useState, useEffect } from "react";
import axios from "axios";
import {Form,  Col,  FormGroup,  FormLabel,  FormControl} from "react-bootstrap";

const Formb=({ history })=> {
  const initialValues = { userFirstName: "", userSecondName:"",  userGender:"",  userAge:"",  userProfession:"",
  userLocation:"",  userPhoneNumber:"",  userEmail:"",  userHouseAddress:"",  userProfileDescription:"",
  userFirstProfileWebsite:"",  userGitHubProfileName:"",  userSecondProfileWebsite:"",  userLinkedInProfileName:"",
  userThirdProfileWebsite:"",  userPersonalWebsiteLink:"",  userHighSchoolDegreeName:"",  userHighSchoolName:"",
  userHighSchoolStartingDate:"",  userHighSchoolEndingDate:"",  userHighSchoolExperience:"",  userCollegeDegreeName:"",
  userCollegeName:"",  userCollegeStartingDate:"",  userCollegeEndingDate:"",  userCollegeExperience:"",  userBachelorDegreeName:"",
  userUniversityName:"",  userBachelorStartingDate:"",  userBachelorEndingDate:"",  userUniversityExperience:"",  user1stExperience:"",
  user1stCompanyName:"",  user1stExperienceStartingDate:"",  user1stExperienceEndingDate:"",  user1stCompanyExperience:"",  user2ndExperience:"",
  user2ndCompanyName:"",  user2ndExperienceStartingDate:"",  user2ndExperienceEndingDate:"",  user2ndCompanyExperience:"",
  user3rdExperience:"",  user3rdCompanyName:"",  user3rdExperienceStartingDate:"",  user3rdExperienceEndingDate:"",  user3rdCompanyExperience:"",
  userSkills:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  
  };

  useEffect(() => {
  console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);

      axios
      .post(process.env.REACT_APP_BACKEND_URL, {userFirstName:formValues.userFirstName, 
        userSecondName:formValues.userSecondName, 
        userGender:formValues.userGender,  
        userAge:formValues.userAge,  
        userProfession:formValues.userProfession,
        userLocation:formValues.userLocation,  
        userPhoneNumber:formValues.userPhoneNumber,  
        userEmail:formValues.userEmail,  
        userHouseAddress:formValues.userHouseAddress,  
        userProfileDescription:formValues.userProfileDescription,
        userFirstProfileWebsite:formValues.userFirstProfileWebsite,  
        userGitHubProfileName:formValues.userGitHubProfileName, 
        userSecondProfileWebsite:formValues.userSecondProfileWebsite,  
        userLinkedInProfileName:formValues.userLinkedInProfileName,
        userThirdProfileWebsite:formValues.userThirdProfileWebsite,  
        userPersonalWebsiteLink:formValues.userPersonalWebsiteLink,  
        userHighSchoolDegreeName:formValues.userHighSchoolDegreeName,  
        userHighSchoolName:formValues.userHighSchoolName,
        userHighSchoolStartingDate:formValues.userHighSchoolStartingDate,  
        userHighSchoolEndingDate:formValues.userHighSchoolEndingDate,  
        userHighSchoolExperience:formValues.userHighSchoolExperience,  
        userCollegeDegreeName:formValues.userCollegeDegreeName,
        userCollegeName:formValues.userCollegeName,  
        userCollegeStartingDate:formValues.userCollegeStartingDate,  
        userCollegeEndingDate:formValues.userCollegeEndingDate,  
        userCollegeExperience:formValues.userCollegeExperience,  
        userBachelorDegreeName:formValues.userBachelorDegreeName,
        userUniversityName:formValues.userUniversityName,  
        userBachelorStartingDate:formValues.userBachelorStartingDate,  
        userBachelorEndingDate:formValues.userBachelorEndingDate,  
        userUniversityExperience:formValues.userUniversityExperience,  
        user1stExperience:formValues.user1stExperience,
        user1stCompanyName:formValues.user1stCompanyName,  
        user1stExperienceStartingDate:formValues.user1stExperienceStartingDate,  
        user1stExperienceEndingDate:formValues.user1stExperienceEndingDate,  
        user1stCompanyExperience:formValues.user1stCompanyExperience,  
        user2ndExperience:formValues.user2ndExperience,
        user2ndCompanyName:formValues.user2ndCompanyName,  
        user2ndExperienceStartingDate:formValues.user2ndExperienceStartingDate,  
        user2ndExperienceEndingDate:formValues.user2ndExperienceEndingDate,  
        user2ndCompanyExperience:formValues.user2ndCompanyExperience,
        user3rdExperience:formValues.user3rdExperience,  
        user3rdCompanyName:formValues.user3rdCompanyName,  
        user3rdExperienceStartingDate:formValues.user3rdExperienceStartingDate,  
        user3rdExperienceEndingDate:formValues.user3rdExperienceEndingDate,  
        user3rdCompanyExperience:formValues.user3rdCompanyExperience,
        userSkills:formValues.userSkills}).then((res) => {
        if (res.data.success) {
          history.push(`/view_resume/${res.data.resumeData._id}`);
        }
      })
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.userFirstName) {
      errors.userFirstName = "First Name is required !";
    }
    if (!values.userSecondName) {
      errors.userSecondName = "Last Name is required !";
    } else if (!regex.test(values.userEmail)) {
      errors.email = "This is not a valid email format!";
    }
    
    return errors;
  };

  return (

    <div className="container">
     
        <h1 className="text-dark font-weight-bold py-3">General Detail</h1>
      <form className="form-section" onSubmit={handleSubmit}>
      <Form.Row>
      <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>First Name</FormLabel>
            <FormControl
              type="text"
              placeholder="First Name"
              name="userFirstName"
              id="firstName"
              onChange={handleChange}
              value={formValues.userFirstName}
              
            />
           <p>{formErrors.userFirstName}</p>

          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Last Name</FormLabel>
            <FormControl
              type="text"
              placeholder="Last Name"
              name="userSecondName"
              onChange={handleChange}
              value={formValues.userSecondName}
              
            />
            <p>{formErrors.userSecondName}</p>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Gender</FormLabel>
            <FormControl
              as="select"
              onChange={handleChange}
              value={formValues.userGender}
              name="userGender"
              
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </FormControl>
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Age</FormLabel>
            <FormControl
              type="number"
              min="1"
              onChange={handleChange}
              value={formValues.userAge}
              
              name="userAge"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Profession</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g Full stack developer"
              onChange={handleChange}
              value={formValues.userProfession}
              
              name="userProfession"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Location</FormLabel>
            <FormControl
              type="text"
              placeholder="Mathugama, Sri Lanka"
              onChange={handleChange}
              value={formValues.userLocation}
              
              name="userLocation"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Mobile Phone </FormLabel>
            <FormControl
              type="number"
              placeholder="+01 23 456 789"
              onChange={handleChange}
              value={formValues.userPhoneNumber}
              required
              name="userPhoneNumber"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Email </FormLabel>
            <FormControl
              type="email"
              placeholder="info@domain.com"
              onChange={handleChange}
              value={formValues.userEmail}
              
              name="userEmail"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> House Address </FormLabel>
            <FormControl
              type="text"
              placeholder="House#0 St#0 street and city name"
              onChange={handleChange}
              value={formValues.userHouseAddress}
              
              name="userHouseAddress"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Describe Yourself</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleChange}
              value={formValues.userProfileDescription}
              
              name="userProfileDescription"
            />
          </FormGroup>
        </Form.Row>
        <h1 className="text-dark font-weight-bold py-4">Social Detail</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleChange}
              value={formValues.userFirstProfileWebsite}
              
              name="userFirstProfileWebsite"
            >
              <option value="GitHub">GitHub</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Personal Website">Portfolio Website</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g johnDoe123"
              onChange={handleChange}
              value={formValues.userGitHubProfileName}
              
              name="userGitHubProfileName"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleChange}
              value={formValues.userSecondProfileWebsite}
              
              name="userSecondProfileWebsite"
            >
              <option value="LinkedIn">LinkedIn</option>
              <option value="GitHub">GitHub</option>
              <option value="Portfolio Website">Portfolio Website</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g johnDoe123"
              onChange={handleChange}
              value={formValues.userLinkedInProfileName}
              
              name="userLinkedInProfileName"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleChange}
              value={formValues.userThirdProfileWebsite}
              
              name="userThirdProfileWebsite"
            >
              <option value="Portfolio Website">Portfolio Website</option>
              <option value="GitHub">GitHub</option>
              <option value="LinkedIn">LinkedIn</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="johnDoe.com"
              onChange={handleChange}
              value={formValues.userPersonalWebsiteLink}
              
              name="userPersonalWebsiteLink"
            />
          </FormGroup>
        </Form.Row>
        <h1 className="text-dark font-weight-bold py-4">
          Educational Detail (Add 2 educational details)
        </h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> High school degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g metric with computer sciences"
              onChange={handleChange}
              value={formValues.userHighSchoolDegreeName}
              
              name="userHighSchoolDegreeName"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> School Name </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g govt school"
              onChange={handleChange}
              value={formValues.userHighSchoolName}
              
              name="userHighSchoolName"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleChange}
              value={formValues.userHighSchoolStartingDate}
              
              name="userHighSchoolStartingDate"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleChange}
              value={formValues.userHighSchoolEndingDate}
              
              name="userHighSchoolEndingDate"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleChange}
              value={formValues.userHighSchoolExperience}
              
              name="userHighSchoolExperience"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> College degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g Intermediate in computer science"
              onChange={handleChange}
              value={formValues.userCollegeDegreeName}
              
              name="userCollegeDegreeName"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> College Name </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g MAO College"
              onChange={handleChange}
              value={formValues.userCollegeName}
              
              name="userCollegeName"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleChange}
              value={formValues.userCollegeStartingDate}
              
              name="userCollegeStartingDate"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleChange}
              value={formValues.userCollegeEndingDate}
              
              name="userCollegeEndingDate"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleChange}
              value={formValues.userCollegeExperience}
              
              name="userCollegeExperience"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> University degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g bachelor in computer science"
              onChange={handleChange}
              value={formValues.userBachelorDegreeName}
              
              name="userBachelorDegreeName"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> University Name </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g university of the punjab"
              onChange={handleChange}
              value={formValues.userUniversityName}
              
              name="userUniversityName"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleChange}
              value={formValues.userBachelorStartingDate}
              
              name="userBachelorStartingDate"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleChange}
              value={formValues.userBachelorEndingDate}
              
              name="userBachelorEndingDate"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleChange}
              value={formValues.userUniversityExperience}
              
              name="userUniversityExperience"
            />
          </FormGroup>
        </Form.Row>
        <h1 className="text-dark font-weight-bold py-5">
          {" "}
          Professional Experience Details (Add 3 latest experiences){" "}
        </h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 1st Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g junior web developer"
              onChange={handleChange}
              value={formValues.user1stExperience}
              
              name="user1stExperience"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleChange}
              value={formValues.user1stCompanyName}
              
              name="user1stCompanyName"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleChange}
              value={formValues.user1stExperienceStartingDate}
              
              name="user1stExperienceStartingDate"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleChange}
              value={formValues.user1stExperienceEndingDate}
              
              name="user1stExperienceEndingDate"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleChange}
              value={formValues.user1stCompanyExperience}
              
              name="user1stCompanyExperience"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 2nd Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g junior web developer"
              onChange={handleChange}
              value={formValues.user2ndExperience}
              
              name="user2ndExperience"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleChange}
              value={formValues.user2ndCompanyName}
              
              name="user2ndCompanyName"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleChange}
              value={formValues.user2ndExperienceStartingDate}
              
              name="user2ndExperienceStartingDate"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleChange}
              value={formValues.user2ndExperienceEndingDate}
              
              name="user2ndExperienceEndingDate"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleChange}
              value={formValues.user2ndCompanyExperience}
              
              name="user2ndCompanyExperience"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 3rd Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g junior web developer"
              onChange={handleChange}
              value={formValues.user3rdExperience}
              
              name="user3rdExperience"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleChange}
              value={formValues.user3rdCompanyName}
              
              name="user3rdCompanyName"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleChange}
              value={formValues.user3rdExperienceStartingDate}
              
              name="user3rdExperienceStartingDate"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleChange}
              value={formValues.user3rdExperienceEndingDate}
              
              name="user3rdExperienceEndingDate"
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleChange}
              value={formValues.user3rdCompanyExperience}
              
              name="user3rdCompanyExperience"
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Write Your Skills</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="e.g HTML|CSS|REACTJS|NODEJS|EXPRESSJS"
              onChange={handleChange}
              value={formValues.userSkills}
              
              name="userSkills"
            />
          </FormGroup>

          <button className="fluid ui button blue" >Submit</button>

        </Form.Row>
        
      </form>
    </div>
  );
}

export default Formb;