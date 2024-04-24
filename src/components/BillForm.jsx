// import icons
import dollarIcon from '../assets/icon-dollar.svg'
import personIcon from '../assets/icon-person.svg'

const BillForm = () => {
  return (
    <div id="bill-form" className="flex flex-col gap-8 w-1/2">
      <div id="bill">
        <label htmlFor="bill" className='text-sm text-dark-grayish-cyan'>Bill</label>
        <div id="bill-container" className="flex bg-very-light-grayish-cyan p-2">
          <img src={dollarIcon} aria-hidden="true" className="pl-2 py-2" />
          <input type="number" name="bill" id="bill" min="0" placeholder="0" className="text-right bg-transparent pr-4 text-very-dark-cyan" />
        </div>
      </div>
      <div id="tip" className="border-2 border-blue-500">
        <label htmlFor="tip" className='text-sm text-dark-grayish-cyan'>Select Tip %</label>
          <div id="tip-choices" className='border-2 border-yellow-400'>
            <label htmlFor="tip5">
              <input type="radio" id="tip5" name="tip" value="5" />
              5%
            </label>
            <label htmlFor="tip10">
              <input type="radio" id="tip10" name="tip" value="10" />
              10%
            </label>
            <label htmlFor="tip15">
              <input type="radio" id="tip15" name="tip" value="15" />
              15%
            </label>
            <label htmlFor="tip25">
              <input type="radio" id="tip25" name="tip" value="25" />
              25%
            </label>
            <label htmlFor="tip50">
              <input type="radio" id="tip50" name="tip" value="50" />
              50%
            </label>
            <input type="number" name="tip" id="tip" min="0" placeholder="Custom" />
          </div>
      </div>
      <div id="people" className='border-2 border-purple-500'>
        <div id="people-label" className='border-2 border-green-500 text-sm'>
          <label htmlFor="people" className='text-dark-grayish-cyan'>Number of People</label>
          <p className='text-red-500'>Can&rsquo;t be zero</p>
        </div>
        <img src={personIcon} aria-hidden="true" />
        <input type="number" name="" id="" className="text-right" />
      </div>
    </div>
  );
};
export default BillForm;
