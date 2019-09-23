function calculate()
{
	var Weight;
	var Height;
	var Gender; 
	var Age; 
	var HRrest; 
	var HRmax;
	
	Weight = frmCalculator.txtWeight.value;
	Height = frmCalculator.txtHeight.value;
	Gender = frmCalculator.cboGender.value;
	Age = frmCalculator.txtAge.value;
	HRrest = frmCalculator.txtHR.value;
	
	if (Weight=="")
	{
	alert("Please enter your weight");
	frmCalculator.txtWeight.focus();
	}
	else if (isNaN(Weight) || isNaN(Height) ||  isNaN(Age) || isNaN(HRrest))
	alert("Please enter numbers only!!!");
	else if (Weight<10)
	alert("Unless you are a baby you do not weigh 10kgs, please enter your REAL weight");
	else if (HRrest==0)
	alert("Unless you are a DEAD, HRrest cannot be 0. Please enter your HRrest");
	else if (Height=="")
	{
	alert("Please enter your height");
	frmCalculator.txtHeight.focus();
	}
	else if (Gender=="-1")
	{
	alert("Please pick a Gender");
	frmCalculator.cboGender.focus();
	}
	else if (Age=="")
	{
	alert("Please enter your age");
	frmCalculator.txtAge.focus();
	}
	else if (HRrest=="")
	{
	alert("Please enter your HRrest");
	frmCalculator.txtHR.focus();
	}
	else 
	{
	HRmax = 205.8 - (0.685 * Age);
	VO2max = 15 * HRmax/HRrest;
	frmCalculator.lstDisplay.value = "Your maximal oxygen uptake is " + VO2max.toFixed(2) + " . Your maximal heart beats per minute is  " + HRmax.toFixed(2);
	}
}


