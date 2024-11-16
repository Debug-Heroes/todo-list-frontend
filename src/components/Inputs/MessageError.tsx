interface MessageErrorProps {
  message?: string
}
export function MessageError({ message = '' }: MessageErrorProps) {
  return (
    <p className="text-xs -mt-3 text-red-800 h-2">{message}</p>
  )
}
