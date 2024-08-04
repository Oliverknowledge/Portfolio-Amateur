const TextGradient = ({text} : {text: string}) => {
    return (
      <p className="animate-textGradient md:text-base text-sm md:font-normal flex-end font-light bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text  text-transparent">
        {text}
      </p>
    )
  }
  
  export default TextGradient
  