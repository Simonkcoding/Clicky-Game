import React from "react";
import Picture from "./Picture";
import pic from "./pic.json"
import './Clicky.css';

let consecutiveWin = 0;
let highestScore = 0;


class Clicky extends React.Component {
    state = {
        pic,
        highestScore,
        consecutiveWin,
    };

    setClicked = id => {
        const picClicked = pic.filter(pic => pic.id === id);

        if (picClicked[0].clicked) {

            consecutiveWin = 0;

            for (let i = 0; i < pic.length; i++) {
                pic[i].clicked = false;
            }

            this.setState({ consecutiveWin });
            this.setState({ pic });

        } else {
            picClicked[0].clicked = true;

            consecutiveWin = consecutiveWin + 1;

            if (consecutiveWin > highestScore) {
                highestScore = consecutiveWin;
                this.setState({ highestScore });
            }

            pic.sort((a, b) => {
                return 0 - Math.random();
            });

            this.setState({ pic });
            this.setState({ consecutiveWin });
        }
    };

    render() {

        return (
            <div>
                <div className="hero">
                    <div className="heroText">
                        <h1 className="banner">Clicky Game</h1>
                        <h3 className="rules">Do NOT Click the same Picture twice</h3>
                        <h4 className="msg1">Highest Score: {this.state.highestScore}</h4>
                        <h4 className="msg2">ConsecutiveWin Score: {this.state.consecutiveWin}</h4>
                    </div>
                </div>
                <div className="row panel">
                    {this.state.pic.map(pic => (
                        <Picture
                            setClicked={this.setClicked}
                            id={pic.id}
                            key={pic.id}
                            image={pic.image}
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default Clicky;




// isConsecutiveWin = () => {
//     this.setState({ consecutiveWin: this.state.consecutiveWin + 1 })
// };

// isLose = () => {
//     this.setState({ consecutiveWin: 0 })
// };

// render() {
//     return (
//         <div className="card text-center">
//             <div className="card-header bg-primary text-white">
//                 Clicky Game!
//             </div>
//             {this.state.Characters.map(Character => (
//                 <Picture
//                     setClicked={this.setClicked}
//                     id={Character.id}
//                     image={Character.image}
//                     className="col-sm-1"
//                 />
//             ))}
//         </div>
//     )
// };

// };


// export default Clicky;


// constructor() {
//     super();
//     statue = {
//         isClicked: false,
//         consecutiveWin: 0
//     }
// }

// pictureClicked = () => {
//     this.setState({ isClicked: true })
// }

// isConsecutiveWin = () => {
//     this.setState({ consecutiveWin: this.state.consecutiveWin + 1 })
// }

// checkPic = () => {

// }