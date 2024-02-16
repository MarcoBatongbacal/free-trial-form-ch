class FreeTrialFormClassHive extends HTMLElement {
        constructor() {
            super();

            // if (window.location.hostname === 'www.classhive.com.au') {
            //     this.API_PATH = 'https://www.wingarukids.com.au/api';
            // } else {
            //     this.API_PATH = 'https://crm.wingaru.me/api';
            // }
            this.API_PATH = 'https://crm.wingaru.me/api';
            // Create a shadow root
            this.attachShadow({ mode: 'open' });

            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://cdn.jsdelivr.net/gh/MarcoBatongbacal/free-trial-form-ch@cc70b70/free-trial-form-class-hive.css';

            this.shadowRoot.appendChild(link);

            // Define the HTML template
            this.shadowRoot.innerHTML += `
                <div class="container classhive-trial-form">
                    <form id="school-details-form">
                        <p class="form-header">School Details</p>
                        <small><span class="form-required">*</span> INDICATES REQUIRED FIELD</small>

                        <div class="form-row">
                            <label for="school_name">
                                YOUR SCHOOL NAME <span class="form-required">*</span>
                            </label>
                            <input
                                type="text"
                                id="school_name"
                                name="school_name"
                                autocomplete="off"
                                required
                            >
                            <div class="invalid-feedback" style="display: none;">
                                <small>This is required</small>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="six columns">
                                <label for="school_postcode">
                                    POSTCODE <span class="form-required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="school_postcode"
                                    name="school_postcode"
                                    autocomplete="off"
                                    required
                                >
                                <div class="invalid-feedback" style="display: none;">
                                    <small>This is required</small>
                                </div>
                            </div>
                            <div class="six columns">
                                <label for="school_type">
                                    INSTITUTION TYPE <span class="form-required">*</span>
                                </label>
                                <select
                                    id="school_type"
                                    name="school_type"
                                    required
                                >
                                    <option value=""></option>
                                </select>
                                <div class="invalid-feedback" style="display: none;">
                                    <small>This is required</small>
                                </div>
                            </div>
                        </div>

                        <div class="form-row" id="school_type_other_container" style="display: none;">
                            <label for="school_type_other">
                                Please specify
                            </label>
                            <input
                                type="text"
                                id="school_type_other"
                                name="school_type_other"
                                autocomplete="off"
                            >
                        </div>

                        <div class="form-row">
                            <div class="six columns">
                                <label for="num_of_teachers">
                                    NUMBER OF TEACHERS <span class="form-required">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="num_of_teachers"
                                    name="num_of_teachers"
                                    required
                                >
                                <div class="invalid-feedback" style="display: none;">
                                    <small>Must be numeric</small>
                                </div>
                            </div>
                            <div class="six columns">
                                <label for="num_of_students">
                                    NUMBER OF STUDENTS <span class="form-required">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="num_of_students"
                                    name="num_of_students"
                                    required
                                >
                                <div class="invalid-feedback" style="display: none;">
                                    <small>Must be numeric</small>
                                </div>
                            </div>
                        </div>
                        
                        <p class="form-header">ClassHive Primary Contact</p>
                        <p class="form-sub-header">
                            The primary contact is the person we will talk to about your trial and account    
                        </p>
                        <div class="form-row">
                            <div class="six columns">
                                <label for="admin_firstname">
                                    FIRST NAME <span class="form-required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="admin_firstname"
                                    name="admin_firstname"
                                    required
                                    placeholder="First"
                                >
                                <div class="invalid-feedback" style="display: none;">
                                    <small>This is required</small>
                                </div>
                            </div>
                            <div class="six columns">
                                <label for="admin_surname">
                                    LAST NAME <span class="form-required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="admin_surname"
                                    name="admin_surname"
                                    required
                                    placeholder="Last"
                                >
                                <div class="invalid-feedback" style="display: none;">
                                    <small>This is required</small>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <label for="admin_email">
                                EMAIL <span class="form-required">*</span>
                            </label>
                            <input
                                type="email"
                                id="admin_email"
                                name="admin_email"
                                required
                            >
                            <div class="invalid-feedback" style="display: none;">
                                <small>This is required</small>
                                <small>Invalid email address</small>
                            </div>
                        </div>
                        <div class="form-row">
                            <label for="admin_phone">
                                CONTACT PHONE NUMBER <span class="form-required">*</span>
                            </label>
                            <input
                                type="text"
                                id="admin_phone"
                                name="admin_phone"
                                required
                            >
                            <div class="invalid-feedback" style="display: none;">
                                <small>This is required</small>
                            </div>
                        </div>
                        <br><br>
                        <div class="form-row">
                            <label for="comments">
                                TELL US WHAT APPS YOUR STUDENTS ARE CURRENTLY USING
                                <span class="form-required">*</span>
                            </label>
                            <textarea
                                id="comments"
                                name="comments"
                                required
                                style="height:178px"
                            ></textarea>
                            <div class="invalid-feedback" style="display: none;">
                                <small>This is required</small>
                            </div>
                        </div>

                        <p class="alert-warning" id="error_msg" style="display: none;"></p>

                        <div class="form-row">
                            <button type="submit" id="submitBtn" class="ch-buttons">Submit</button>
                        </div>
                    </form>
                </div>
            `;

            // Bind event listener
            this.shadowRoot.querySelector('#school-details-form').addEventListener('submit', this.onSubmit.bind(this));
            this.shadowRoot.querySelector('#school_type').addEventListener('change', this.onSchoolTypeChange.bind(this));
            this.populateInstitutionTypes();

        }

        // Fetch institution types from API and populate select input
        async populateInstitutionTypes() {
            try {
                const data = [ 
                {  
                    value : 'Primary', 
                    label : 'Primary School', 
                },
                {  
                    value : 'Secondary', 
                    label : 'High School', 
                },
                {  
                    value : 'Combined', 
                    label : 'Combined', 
                },
                {  
                    value : 'Other', 
                    label : 'Other', 
                }
                ];

                const schoolTypeSelect = this.shadowRoot.querySelector('#school_type');
                data.forEach(item => {
                    const option = document.createElement('option');
                    option.value = item.value;
                    option.textContent = item.label;
                    schoolTypeSelect.appendChild(option);
                });
            } catch (error) {
                console.error('Error fetching institution types:', error);
            }
        }

        create(payload) {
            
            // if (window.location.hostname === 'www.classhive.com.au') {
            //     payload.campaign_name = window['CAMPAIGN_SLUG'];
            // } else {
                payload.campaign_name = "website-direct-school-ch-trial";
            // }
            
            payload.platform = 2;

            return fetch(`${this.API_PATH}/v2/kids_trials`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                // Handle errors as needed
                throw error;
            });
        }

        // Reset form fields
        resetForm(form) {
            form.reset();
        }

        // Handle form submission
        onSubmit(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            let isValid = true;
            const formElements = event.target.elements;

            for (const element of formElements) {
                
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                    const fieldName = element.getAttribute('name');
                    const fieldValue = formData.get(fieldName);
                    if (element.hasAttribute('required') && !fieldValue) {
                        isValid = false;
                    }
                }
            }

            // If form is valid, you can proceed with form submission or further processing
            if (isValid) {
                this.create( Object.fromEntries(formData) )
                .then(() => {
                    // Reset the form after successful submission
                    this.resetForm(event.target);
                    window.location.href = 'https://www.classhive.com.au/start-trial-thank-you';
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                });
            } else {
                console.log('Form is invalid. Please fill in all required fields.');
            }
        }

        // Handle school type change
        onSchoolTypeChange(event) {
            const schoolTypeOtherContainer = this.shadowRoot.querySelector('#school_type_other_container');
            if (event.target.value === 'Other') {
                schoolTypeOtherContainer.style.display = 'block';
                const schoolTypeOtherInput = this.shadowRoot.querySelector('#school_type_other');
                schoolTypeOtherInput.setAttribute('required', 'true');
            } else {
                schoolTypeOtherContainer.style.display = 'none';
                const schoolTypeOtherInput = this.shadowRoot.querySelector('#school_type_other');
                schoolTypeOtherInput.removeAttribute('required');
            }
        }
    }

    // Define the custom element
    customElements.define('free-trial-form-class-hive', FreeTrialFormClassHive);