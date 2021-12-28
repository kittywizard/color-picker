export default function ColorBox(props) {

    const styles = {
        backgroundColor: props.hex,
        color: determineColor(props.hex)
    }

    return (
        <div className="flex-div" style={styles} onClick={props.changeColor}>
            {props.hex}
        </div>
    )

    function determineColor(hexcode) {
        let light = 0;
        let dark = 0;

        let hexArray = [];
        let rgbArray = [];

        hexArray.push(hexcode.slice(1,3), hexcode.slice(3,5), hexcode.slice(5,8)); //slices and pushes a hex code into its various 'parts'
        hexArray.forEach(color => rgbArray.push(parseInt(color, 16))); //converts said hex number into rgb

        rgbArray.forEach(rgb => rgb < 127.5 ? light++ : dark++); //determines if it's light or dark
        return light >= dark ?  "#FFF" :  "#000";
    }
}