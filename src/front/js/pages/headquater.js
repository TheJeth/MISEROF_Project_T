import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

/*		
		<div className="background">
		
				<div className="text-center mt-5">
					
				</div>
		</div>

		<div class="jumbotron jumbotron-fluid">
			<div class="container">
				<h1>MISEROF</h1>
				<p>
					The presentation of MISEOROF going there
				</p>
  			</div>
		</div>
		*/

		/*
			
		<!-- On tables -->
<table class="table-primary">...</table>
<table class="table-secondary">...</table>
<table class="table-success">...</table>
<table class="table-danger">...</table>
<table class="table-warning">...</table>
<table class="table-info">...</table>
<table class="table-light">...</table>
<table class="table-dark">...</table>

<!-- On rows -->
<tr class="table-primary">...</tr>
<tr class="table-secondary">...</tr>
<tr class="table-success">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-info">...</tr>
<tr class="table-light">...</tr>
<tr class="table-dark">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="table-primary">...</td>
  <td class="table-secondary">...</td>
  <td class="table-success">...</td>
  <td class="table-danger">...</td>
  <td class="table-warning">...</td>
  <td class="table-info">...</td>
  <td class="table-light">...</td>
  <td class="table-dark">...</td>
</tr>
	

		*/
export const Headquater = () => {
	const { store, actions } = useContext(Context);

	return (
		<div class="jumbotron jumbotron-fluid">
			<div class="container">
				<h1>MISEROF</h1>
				<p>
					The presentation of MISEOROF going there
				</p>
			</div>
		</div>
		
	);
};
