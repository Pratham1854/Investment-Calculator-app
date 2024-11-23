export default function UserInput({onChange,userinput}){

    return(
<section id ="user-input">
<div className="input-group">
<p>
    <label>Intial Investment</label>
    <input type="number" required value={userinput.initialInvestment} onChange={(event)=>onChange('initialInvestment',event.target.value)}/>
</p>
<p>
    <label>Annual Investment</label>
    <input type="number" required value={userinput.annualInvestment} onChange={(event)=>onChange('annualInvestment',event.target.value)}/>
</p>
</div>
<div className="input-group">
<p>
    <label>Expected Return</label>
    <input type="number" 
    required 
    value={userinput.expectedReturn} 
    onChange={(event)=>onChange('expectedReturn',event.target.value)}/>
</p>
<p>
    <label>Duration</label>
    <input type="number" required value={userinput.duration} onChange={(event)=>onChange('duration',event.target.value)}/>
</p>
</div>
</section>
    );
}