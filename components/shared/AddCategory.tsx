const AddCategory = () => {
	return (
		<div>
			<div>
				<label htmlFor="category">Selecione uma Categoria:</label>
				<select
					name="category"
					required
					className="text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border w-full border-gray-200 p-2 rounded-md py-1.5"
				>
					<option value="" disabled selected>
						Choose Tag
					</option>
					<option value="Adventure">Adventure</option>
					<option value="Culture">Culture</option>
					<option value="Journey">Journey</option>
					<option value="Discovery">Discovery</option>
					<option value="Politics">Politics</option>
				</select>
			</div>
		</div>
	);
};

export default AddCategory;