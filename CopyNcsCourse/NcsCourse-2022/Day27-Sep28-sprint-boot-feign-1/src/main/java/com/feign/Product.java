package com.feign;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {
	
	@Id
	@Column(name = "product_id")
	private int productId;
	
	@Column(name = "product_name")
	private String productName;
	
	@Column(name = "price")
	private double price;
	
	@Column(name = "stock_available")
	private int stockAvailable;

	public Product() {
	}
	
	

	public Product(int productId, String productName, double price, int stockAvailable) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.price = price;
		this.stockAvailable = stockAvailable;
	}



	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getStockAvailable() {
		return stockAvailable;
	}

	public void setStockAvailable(int stockAvailable) {
		this.stockAvailable = stockAvailable;
	}



	@Override
	public int hashCode() {
		return Objects.hash(price, productId, productName, stockAvailable);
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		return Double.doubleToLongBits(price) == Double.doubleToLongBits(other.price) && productId == other.productId
				&& Objects.equals(productName, other.productName) && stockAvailable == other.stockAvailable;
	}



	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", price=" + price
				+ ", stockAvailable=" + stockAvailable + "]";
	}
	
	
	

}
