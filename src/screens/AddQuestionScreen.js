import './AddQuestionScreen.css';
import NavBar from './Component/NavBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import Select from 'react-select';
const AddQuestionScreen = (props) =>{
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
    return(
        <>
           <div className="container_div">
                <div className='background_div'>
                    <div style={{marginLeft:'10%',marginRight:'10%'}}>
                        <h3 className='add_question'>Add Question</h3>
                        <div style={{display:'flex',justifyContent:'center'}}>
                        <p className='sub_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                        </p>
                        </div>
                        <form name='question_from' className='questionform'>
                            <div className='categories_div'>
                                <div className='category'>
                                    <p className='label'>Category</p>
                                    <Select options={options} className='select_category' />
                                </div>
                                <div className='sub_category'>
                                    <p className='label'>Sub-category</p>
                                    <Select options={options} className='select_category' />
                                </div>
                                <div className='topic'> 
                                    <p className='label'>Topic</p>
                                    <Select options={options} className='select_category'/>
                                </div>
                            </div>
                            <div>
                                <p className='question_lable'>Question</p>
                                <input name='question' className='question_input' placeholder='Enter Question here' />
                            </div>

                            <div>
                                <p className='question_lable'>Answer</p>
                                <div className='option_div'>
                                    <input name='option1' className='option1' placeholder='Option 1' />
                                    <input name='option2' className='option1' placeholder='Option 2' />
                                </div>
                                <div className='option_div'>
                                    <input name='option1' className='option1' placeholder='Option 1' />
                                    <input name='option2' className='option1' placeholder='Option 2' />
                                </div>
                            </div>
                            <div className='button_div'>
                                <input type='submit' name='submit' className='submit_btn' value='submit'/>
                                <input type='reset' name='Cancel' className='cancel_btn' value='Cancel'/>

                            </div>

                        </form>
                    </div>
            </div>

            </div>
           
            
        </>
    );

}

export default AddQuestionScreen;