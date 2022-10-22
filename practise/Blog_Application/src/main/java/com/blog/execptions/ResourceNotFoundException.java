package com.blog.execptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;



@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends Exception {
	
	private static final long serialVersionUID = 1L;
	private final   String resourceName;
	private final String fieldName;
	private final Long fieldValue;
	
	

	public ResourceNotFoundException(String resourceName, String fieldName) {
		super();
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = null;
	}
	public ResourceNotFoundException(String resourceName, String fieldName, Long fieldValue) {

		super(String.format("%s not found with %s : %s" , resourceName,fieldName,fieldValue));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}
	@Override
	public String toString() {
		return "ResourseNotFoundException [resourceName=" + resourceName + ", fieldName=" + fieldName + ", fieldValue="
				+ fieldValue + "]";
	}
	public String getResourceName() {
		return resourceName;
	}
	public String getFieldName() {
		return fieldName;
	}
	public Long getFieldValue() {
		return fieldValue;
	}
	
	
	
	

}
