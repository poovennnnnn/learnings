package com.example.jwt;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Role {
	  
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer id; 
	 
	    private String roleName;
	    private String roleDescription;
	    public String getRoleName() {
	        return roleName;
	    }

	    public void setRoleName(String roleName) {
	        this.roleName = roleName;
	    }

	    public String getRoleDescription() {
	        return roleDescription;
	    }

	    public void setRoleDescription(String roleDescription) {
	        this.roleDescription = roleDescription;
	    }

		@Override
		public String toString() {
			return "Role [roleName=" + roleName + ", roleDescription=" + roleDescription + "]";
		}

}
