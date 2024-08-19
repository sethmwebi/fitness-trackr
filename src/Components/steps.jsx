import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
function Steps({today}) {
  const data = [
  { name: 'Steps', value: Math.floor(today/0.75) },
  { name: 'Goal', value: Math.floor(2100/0.75) }
];
const COLORS = ['#0000000','#808080'];
  return (
    <div className='single-tab today-distance'>
     <p className="tab-title">Steps</p>
    <div className="info distance-info">
       <p>You have walked <span>{Math.floor(today/0.75)}</span> out of <span>{2800} </span> that you should make in a day.</p>
    </div>
    <PieChart width={400} height={400} className='pie-chart'>
    <Pie
      data={data}
      cx={200}
      cy={200}
      innerRadius={80} // This creates the doughnut effect
      outerRadius={150}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
    </div>
  )
}

export default Steps