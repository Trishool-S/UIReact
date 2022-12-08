import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from "react";

function getSteps() {
    return ['Step 1', 'Step 2', 'FINISH'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Start';
        case 1:
            return 'Message Published';
        case 2:
            return 'Fetching version';
        default:
            return '';
    }
}

export default function StepperDemo() {

    let myStyle = {
        minHeight: "80vh",
        margin: "40px auto"
    }
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();
    const [clients, setclients] = useState([]);
    const [isButtonDisabled, setDisable] = React.useState(false);
    const [alerts, setAlerts] = useState([]);


    // useEffect(() => {
    //     function getAlerts() {
    //         fetch('http://localhost:3002/mock/api/check/response')
    //             .then(result => result.json())
    //             .then(result => setAlerts(result))


    //     }
    //     // if (fetch.statusCode === 200) {
    //     //     alert("fething version id 2");
    //     //     window.location.href = "/steps";
    //     // }

    //     getAlerts()
    //     const interval = setInterval(() => getAlerts(), 10000)

    //     return () => {
    //         clearInterval(interval);
    //     }
   

    // }, []);
    // console.log(alerts)

    


    async function Submit(e) {       
        e.preventDefault();
        const response = await fetch('http://localhost:3001/mock/api/data/testing');
        const json = await response.json();
        setTimeout(() => this.setState({ isButtonDisabled: false }), 5000);

        setclients(json);
        setDisable({ isButtonDisabled: true })
    }

    useEffect(() => {
        async function getAlerts() {
            const response = await fetch("http://localhost:3002/mock/api/check/response");
            const json = await response.json();
            setAlerts(json)

        }
        getAlerts()
        const interval = setInterval(() => getAlerts(), 50000)

        return () => {
            clearInterval(interval);
        }
    }, []);


    // const isStepOptional = step => {
    //     return step === 1;
    // };
                                          
    const isStepSkipped = step => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    // const handleSkip = () => {
    //     if (!isStepOptional(activeStep)) {
    //         throw new Error("You can't skip a step that isn't optional.");
    //     }
    //     setActiveStep(prevActiveStep => prevActiveStep + 1);
    //     setSkipped(prevSkipped => {
    //         const newSkipped = new Set(prevSkipped.values());
    //         newSkipped.add(activeStep);
    //         return newSkipped;
    //     });
    // };  

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <div className='container-fluid page'>
                <h1 className="fw-bold mb-lg-4 page">Stepper API</h1>
                <div style={myStyle}>
                    <form onSubmit={Submit}>   
                        <Stepper activeStep={activeStep} >
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                // if (isStepOptional(index)) {
                                //     labelProps.optional = <Typography variant="caption">Optional</Typography>;
                                // }
                                if (isStepSkipped(index)) {
                                    stepProps.completed = false;
                                }
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        <div>
                            {activeStep === steps.length ? (
                                <div>
                                    <Typography>
                                        All steps completed - you're finished
                                    </Typography>
                                    <Button onClick={handleReset}  >
                                        Reset
                                    </Button>
                                </div>
                            ) : (
                                <div>
                                    <Typography >{getStepContent(activeStep)}</Typography>
                                    <div>
                                        <Button disabled={activeStep === 0} onClick={handleBack} >
                                            Back
                                        </Button> 
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                        <div>  
                                            <button type="submit" className="mt-3 btn btn-primary" disabled={isButtonDisabled}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}  