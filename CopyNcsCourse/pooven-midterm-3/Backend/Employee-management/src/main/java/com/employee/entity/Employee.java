package com.employee.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "employee")
@Data
@AllArgsConstructor

@NoArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "emp_id")
    private Integer empId;

    @Column(name = "emp_name")
    private String empName;

    @Column(name = "job")
    private String job;

    @Column(name = "salary")
    private Integer salary;

	public Employee(String empName, String job, Integer salary) {
		super();
		this.empName = empName;
		this.job = job;
		this.salary = salary;
	}
    
    
}








