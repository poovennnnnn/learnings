
public class PermanentEmployee extends Employee{
	
	public PermanentEmployee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PermanentEmployee(int empId, String empName, double grossSalary) {
		super(empId, empName, grossSalary);
		// TODO Auto-generated constructor stub
	}


	public void showNetSalaryAfterDeductions() {
	int deductions = 300 + 100 + 250 +200;
	int netSalary = (int) getGrossSalary() - deductions;
	
	System.out.println("Gross salary = "+getGrossSalary());
	System.out.println("Deductions = "+deductions);
	System.out.println("Net Salary = "+netSalary);
	
	
	
  

}

}
