import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className="alert"
    >
      <Container>
        <div className="py-2 text-center text-sm text-white">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
             Fun Fact: There are over 700 species of dinosaurs!
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
