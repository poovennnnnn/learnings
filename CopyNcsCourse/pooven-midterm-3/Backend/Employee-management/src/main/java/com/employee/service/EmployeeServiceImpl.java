package com.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.entity.Employee;
import com.employee.exceptions.EmployeeAlreadyExistException;
import com.employee.exceptions.EmployeeNotFoundException;
import com.employee.repository.EmployeeRepository;


@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepo;

	@Override
	public Employee save(Employee employee) throws EmployeeNotFoundException, EmployeeAlreadyExistException {
				
		return employeeRepo.save(employee);
	}

	@Override
	public Employee findById(Integer id) throws EmployeeNotFoundException {
		return employeeRepo.findById(id).orElseThrow(
				() -> new EmployeeNotFoundException("Employee NotFound Id: "+id));
	}

	@Override
	public List<Employee> findAll() {
		
		return employeeRepo.findAll();
	}

	@Override
	public void deleteById(Integer id) throws EmployeeNotFoundException {
	    findById(id);
		employeeRepo.deleteById(id);
		
	}

	@Override
	public boolean existsByEmpId(Integer id) {
		return employeeRepo.existsById(id);
	}
	
	@Override
	public Employee update(Employee employee) throws EmployeeNotFoundException {
				findById(employee.getEmpId());		
		return employeeRepo.save(employee);
	}

}
