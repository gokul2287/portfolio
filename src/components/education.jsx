import React, { Component } from 'react'

export default class Education extends Component {

    render () {
        return (
            <div>
                <section className="colorlib-education" data-section="education">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Education</span>
							<h2 className="colorlib-heading animate-box">Education</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
							<div className="fancy-collapse-panel">
								<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
									<div className="panel panel-default">
									    <div className="panel-heading" role="tab" id="headingOne">
									        <h4 className="panel-title">
									            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master Degree in Computer Science
									            </a>
									        </h4>
									    </div>
									    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
									         <div className="panel-body">
									            
												<p>I have completed my masters studies with major in Computer Science from University of Pune. I have taken courses like System Programming, OOPs, Computer Networks, Java Programming, Software Engineering Principls over the years and have better understanding of these subjects. 
													Completed my internship program at Cygnus Software Pvt.Ltd. at Pune. My Project based on Code Analysis developed in .Net
												</p>
										      	
									         </div>
									    </div>
									</div>
									<div className="panel panel-default">
									    <div className="panel-heading" role="tab" id="headingTwo">
									        <h4 className="panel-title">
									            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree in Computer Science
									            </a>
									        </h4>
									    </div>
									    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
									        <div className="panel-body">
									            <p>I have completed my graduation studies with major in Computer Science. I have taken courses like System Programming, OOPs, Computer Networks, Java Programming, Software Engineering Principls over the years and have better understanding of these subjects.</p>
													{/* <ul>
														<li>Separated they live in Bookmarksgrove right</li>
														<li>Separated they live in Bookmarksgrove right</li>
													</ul> */}
									        </div>
									    </div>
									</div>
									<div className="panel panel-default">
									    <div className="panel-heading" role="tab" id="headingThree">
									        <h4 className="panel-title">
									            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Primary and Higher Education
									            </a>
									        </h4>
									    </div>
									    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
									        <div className="panel-body">
									            <p> I have completed my higher secondary education with major subjects as Physics,Chemistry and Maths. During my time at school, I have developed interest in solving problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p>	
									        </div>
									    </div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

            </div>
        )
    }
}