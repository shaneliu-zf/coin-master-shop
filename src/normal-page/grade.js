import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/grade.css'

function Grade() {
    return (
        <div className='grade_bg'>
            <div>
                <Row className='grade_content'>
                    <Col sm={12} className='center'>
                        <h1 className='grade_title'>
                            what is grade?
                        </h1>
                    </Col>
                    <Col sm={12}>
                        <Container>
                            <br />
                            <p>
                                The coin grading system is a system in which the market value of a coin is determined by factors such as its preservation state, year, and whether it has a special patina. Without a standard to follow, these factors often lead to different perceptions of value between buyers and sellers in transactions. To solve this long-standing trade dispute, the coin market gradually formed an independent grading system, in which a third party assigns a score to the preservation state of a coin, and this score becomes a reference for the coin's value in the market.
                            </p><p>
                                The currently commonly used grading standard assigns a grade of 1 to 70 to the preservation state of a coin, where 70 represents the best preservation state, and 1 represents the worst. There are several score levels, including BS-1, FR-2, AG-3, G-4, G-6, VG-8, VG-10, F-12, F-15, VF-20, VF-25, VF-30, VF-35, XF-40, XF-45, AU-50, AU-53, AU-55, Au-58, MS-60, MS-61, MS-62, MS-63, MS-64, MS-65, MS-66, MS-67, MS-68, MS-69, and the highest score, MS-70.
                            </p><p>
                                Grades above 60 represent coins that have not been circulated and used on the market, also known as UNC (Uncirculated) coins, but it should not be assumed that the MS grade means the coin is in perfect condition. For example, Morgan coins are often scratched by the time they pass from the mint to financial institutions to general people, but since these flaws are not caused by humans, they are still considered UNC. Therefore, theoretically, there is no perfect MS-70 condition for Morgan coins. The highest grade currently certified is MS-68, which is very expensive, with auction prices reaching hundreds of thousands of dollars.
                            </p><p>
                                In general, when purchasing coins, the grading score is a very important reference standard, and different scores correspond to different market prices, so pay attention to it when choosing.
                            </p><p>
                                In addition, the grading organization is also very important, because the scores assessed by different organizations can have a big difference, so pay attention to this as well. Generally speaking, joint certification is the most reliable, because multiple experts work together to certify.
                            </p><p>
                                In summary, the coin grading system is an important reference in coin transactions, which is scored by a third party. Different scores correspond to different market prices, and attention should be paid when purchasing, the grading organization is also important, and joint certification is the most reliable.
                            </p>
                            <br />
                            <hr />
                            <br />
                            <p>
                                <h2>Coin grading organizations</h2>
                                There are several coin grading organizations that are recognized in the coin collecting community, including:
                            </p><p>
                                1. Professional Coin Grading Service (PCGS): One of the most well-known and respected grading services, PCGS was established in 1986 and uses a numerical grading system from 1 to 70, with 70 being the highest grade.
                            </p><p>
                                2. Numismatic Guaranty Corporation (NGC): NGC is one of the leading grading services and uses a numerical grading system from 1 to 70, with 70 being the highest grade.
                            </p><p>
                                3. American Numismatic Association Certification Service (ANACS): One of the oldest coin grading services, ANACS was established in 1972 and uses a numerical grading system from 1 to 70, with 70 being the highest grade.
                            </p>
                        </Container>
                    </Col>
                </Row>
            </div>
        </div>
    );

}
export default Grade;