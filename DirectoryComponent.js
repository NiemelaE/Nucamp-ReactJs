import React from 'react';




class Directory extends React.Component {
constructor(props){
super(props);
this.flowers = this.flowers.bind(this)
this.state = {
flowers: [
{
id: 0,
name: "Roses",
color: "Red",
},
{
id: 1,
name: "Tulips",
color: "Purple",
},
{
id: 2,
name: "SunFlower",
color: "yellow",
},
],


};
}






render() {

    

const directory = this.state.flowers.map(flower => {
return(
    
<div key= {flower.id}>
<h1>{flower.name}</h1>
<h2>{flower.color}</h2>
<div>
    <button onclick={this.flowers}>Click Here</button>
</div>



</div>

);



});
return (<div>{directory}</div>);




}



}



export default Directory;