import { motion, useAnimation, useAnimationControls } from 'framer-motion'
import styled from 'styled-components'

const Main= ()=>{

    const bsVariants= {
        close: {y:'50%'}, // 단위에 vh를 사용하면 drag 동작에 문제 발생
        open: {y:0}
    }

    const controls= useAnimationControls()

    return (
        <div>
            <button onClick={()=>controls.start('open')}>open bottom sheet</button>
            <button onClick={()=>controls.start('close')}>close bottom sheet</button>

            <BottomSheet                
                variants={bsVariants}
                initial='close'
                animate={controls}
                drag='y'
                dragConstraints={{top:0}}
                onDragEnd={(event, info)=>{
                    console.log(info.delta.y)
                    if(info.delta.y > 10 ) controls.start('close')
                }}                
            >
                <BottomSheetHandle></BottomSheetHandle>

            </BottomSheet>

                        

        </div>
    )
}
export default Main

const BottomSheet= styled(motion.div)`
    background-color: white;
    box-shadow: 0 0 10px gray;
    height: 100vh;
    position: fixed;
    top: 50vh;
    left: 0;
    right: 0;
    width: 96%;
    margin: 0 auto;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
`

const BottomSheetHandle= styled.div`
    width: 50px;
    height: 6px;
    background-color: silver;
    border-radius: 3px;
    margin: 16px auto;
`