import "./index.css"
import {useThemeContext} from "../../../../theme-context";

export const Logo = () => {
    const {toggleTheme} = useThemeContext()
    return (
        <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329 191" onClick={toggleTheme}>
            <g id="Layer">
                <path className="logo__face"
                      d="M149.5 97.4C149.5 132.3 124.7 161.4 91.8 168.2C90.8 168.5 89.9 168.7 89.1 168.8C87 172.9 83.7 174.8 83.5 174.9L82.5 175.5L81.5 174.9C81.4 174.8 79.2 173.6 77.2 170.9C75.2 173.6 73 174.8 72.9 174.9L71.9 175.5L70.9 174.9C70.8 174.8 67.5 172.9 65.3 168.8C64.5 168.7 63.6 168.5 62.6 168.2C29.7 161.5 4.9 132.3 4.9 97.4C4.9 78.5 12.2 61.3 24.1 48.4C24.5 47.7 25 47 25.6 46.4C26.2 45.8 26.9 45.4 27.5 45C28.7 43.8 30 42.6 31.4 41.5C31.7 40.6 32.2 39.6 33 38.6C34 37.5 35.3 36.5 36.7 35.9C37 34.5 37.7 32.5 39.5 30.8C41.4 29 43.6 28.4 45.1 28.3C46 26.8 47.6 25 50.2 23.7C52.9 22.4 55.5 22.3 57.2 22.5C59.5 20.9 66.9 16.6 77.2 16.6C87.5 16.6 94.9 21 97.2 22.5C98.9 22.3 101.5 22.4 104.2 23.7C106.8 25 108.4 26.9 109.3 28.3C110.8 28.4 113 29 114.9 30.8C116.7 32.5 117.4 34.5 117.7 35.9C119.1 36.5 120.4 37.4 121.4 38.6C122.2 39.5 122.7 40.5 123 41.5C124.3 42.6 125.6 43.8 126.9 45C127.6 45.3 128.2 45.8 128.8 46.4C129.5 47 129.9 47.7 130.3 48.4C142.2 61.3 149.5 78.5 149.5 97.4ZM126.9 64.3C124.2 67.3 121.1 68.8 118.8 69.5C118.9 71.4 118.9 73.3 118.7 75.3C120.8 75.4 123.8 75.1 126.9 73.6C130.9 71.7 133.3 67.7 134.1 66.3C134.1 65.9 134.1 65.5 134 65.1C133.5 61.7 132.1 59 130.8 57.1C130.2 59.4 129.1 62 126.9 64.3ZM145.3 97.2C145.3 86.3 142.7 75.9 138.1 66.7C138.4 71.6 137 75.5 135.8 77.9C136.4 79.8 137.2 83.8 135.2 87.9C133.7 91.1 131.3 92.9 129.5 93.9C129.7 95 129.7 96 129.6 97.1C129.4 99.2 128.5 100.8 127.7 101.9C128.4 105.1 127.5 108.4 125.1 110.5C123.7 111.8 122.2 112.4 120.9 112.6C121.3 114.3 121.4 116.6 120.3 118.9C119.2 121.3 117.4 122.7 115.9 123.5C116.3 125.3 116.4 128 115 130.8C113.9 132.9 112.4 134.3 111.1 135.1C111.2 136.9 111 139.5 109.8 142.1C109 143.8 107.8 145.3 106.4 146.6C106.3 149 105.8 151.4 104.8 153.6C104 155.3 102.9 156.9 101.6 158.3C101.3 159.2 100.9 160.4 100.1 161.7C126.5 152.3 145.4 127 145.3 97.2ZM70.6 132.1C72.2 133.3 74.5 134.5 77.3 134.5C77.4 134.5 77.4 134.5 77.5 134.5C80.2 134.5 82.4 133.3 83.9 132.1C81.6 131.8 79.4 131.6 77.2 131.6C75 131.6 72.8 131.8 70.6 132.1ZM75.2 127.7L75.2 120.1C70.9 120.5 66.9 121.8 65.4 122.4C64.2 124.5 60.3 130.5 53.8 131.7C54.1 131.9 54.5 132 55 132C55.7 132 57.4 131.7 61.5 130.3C66 128.7 70.6 127.8 75.2 127.7ZM92.9 130.2C97 131.7 98.7 131.9 99.4 131.9C99.8 131.9 100.2 131.8 100.6 131.6C94.1 130.4 90.2 124.4 89 122.3C87.4 121.7 83.4 120.4 79.2 120L79.2 127.6C83.8 127.8 88.4 128.7 92.9 130.2ZM101.2 122.6C102.3 121.2 102.7 119.6 102.9 118.6L103 118L103.4 117.5C107.1 113.5 109.9 108.8 111.7 103.6C114.4 95.7 114.1 88.6 113.3 84L113.2 83.5L113.3 83C116.8 71.9 115 57.6 106.9 54.8C102.9 53.4 98.1 55.9 95.6 57.6L93.8 58.7L92.7 56.9C91.9 55.6 90 53.1 86.7 51.7C84.9 50.9 83.1 50.7 81.6 50.7C82 51.7 82.5 52.6 83.1 53.5C84.2 55.2 85.5 56.7 87.1 57.9L90 60.2L86.5 61.4C85.4 61.8 84.4 62.1 83.4 62.3C81.2 62.8 79.3 62.9 77.6 62.9C75.7 62.9 74.2 62.7 73.3 62.6C64.7 61.4 58.5 57.1 57.5 56.4C54.9 55 51.3 53.7 48.2 54.8C40.1 57.6 38.3 71.9 41.8 83L41.9 83.5L41.8 84C41 88.6 40.7 95.7 43.4 103.6C45.2 108.8 48 113.4 51.7 117.5L52.1 118L52.2 118.6C52.3 119.6 52.8 121.1 53.9 122.6C55.2 124.2 56.8 125 57.8 125.4C60.8 123.1 62.4 119.9 62.4 119.8L62.7 119.1L63.4 118.8C63.6 118.7 67.9 117 73.1 116.2C71.5 115.4 70.2 114.2 69.3 112.7L65.9 112.7L65.9 108.6L71.9 108.6L72.4 109.9C73.2 111.8 75.2 113.1 77.3 113.1C79.4 113.2 81.4 111.9 82.2 109.9L82.7 108.6L88.7 108.6L88.7 112.7L85.3 112.7C84.4 114.2 83.1 115.4 81.6 116.2C86.8 116.9 91.1 118.7 91.3 118.8L92 119.1L92.3 119.8C92.4 119.8 94 123.1 96.9 125.4C97.8 125.1 99.4 124.3 101.2 122.6ZM54.3 161.9C53.5 160.6 53.1 159.4 52.8 158.5C51.5 157.1 50.4 155.5 49.6 153.8C48.6 151.6 48 149.2 48 146.8C46.6 145.6 45.4 144 44.6 142.3C43.3 139.6 43.2 137.1 43.3 135.3C42 134.4 40.5 133.1 39.4 131C38 128.2 38.1 125.5 38.5 123.7C37.1 122.9 35.2 121.5 34.1 119.1C32.8 116.4 33.2 113.8 33.7 112C32.6 111.4 31.4 110.6 30.3 109.5C27.9 107.1 27.1 104.3 26.9 102.5C26.1 101.4 25 99.7 24.7 97.3C24.5 96.1 24.6 95 24.8 94.1C23 93.1 20.6 91.3 19.1 88.1C17.1 84 17.9 80 18.5 78.1C17.4 75.7 16 71.8 16.2 66.9C11.6 76.1 9 86.4 9 97.4C9 127 27.9 152.3 54.3 161.9ZM22.9 77.9C23.7 79.3 25.2 81.3 27.7 82.5C31.4 84.2 35 83.4 37 82.6C36.7 81.5 36.5 80.5 36.3 79.5C35.9 79.5 35.5 79.5 35.1 79.5C32.4 79.5 29.1 79 25.7 77.3C24 76.5 22.5 75.4 21.3 74.2C21.7 75.3 22.1 76.2 22.5 76.9L22.9 77.9ZM21.8 82.9C21.9 83.9 22.2 85 22.7 86.1C24.1 89.1 26.7 90.4 27.8 90.8C29.6 91.4 31.4 91.6 33.2 91.5C34.4 91.5 35.6 91.2 36.8 90.8C36.8 89.3 36.9 88 37 86.7C35.7 87.1 34.1 87.4 32.3 87.4C30.4 87.4 28.2 87.1 26 86C24.4 85.2 23 84.2 21.8 82.9ZM28.7 96.8C28.9 98.2 29.6 99.3 30.1 99.9C31.4 100.5 32.7 100.8 34.1 100.8C35.6 100.8 36.9 100.5 37.9 100.2C37.5 98.5 37.3 96.8 37.1 95.2C36 95.5 34.8 95.7 33.6 95.8C33.2 95.8 32.8 95.8 32.4 95.8C31.2 95.8 30 95.6 28.8 95.4C28.7 95.8 28.7 96.2 28.7 96.8ZM31.9 104.6C32.2 105.3 32.7 105.9 33.3 106.6C34.1 107.4 34.9 107.9 35.7 108.3C36.3 107.6 37.2 106.9 38.4 106.4C38.8 106.2 39.3 106.1 39.7 106C39.6 105.6 39.4 105.3 39.3 104.9C39.2 104.6 39.1 104.3 39 104C37.5 104.5 35.9 104.7 34.4 104.7C34.3 104.7 34.1 104.7 34 104.7C33.3 104.7 32.6 104.6 31.9 104.6ZM37.8 117.4C38.5 118.8 39.6 119.6 40.4 120.1C41.2 119.2 42.3 118.4 43.4 117.9C44.2 117.5 45 117.3 45.7 117.1C44 114.9 42.6 112.6 41.4 110.2C41 110.1 40.4 110.1 39.8 110.3C39.2 110.5 38.7 111 38.5 111.3L38.2 111.8C38.1 111.9 36.5 114.5 37.8 117.4ZM114 119.8C114.9 119.3 116 118.5 116.6 117.1C117.8 114.3 116.3 111.7 116.2 111.6L115.9 111.1C115.7 110.8 115.3 110.4 114.6 110.1C114 109.9 113.4 109.9 113 110C111.8 112.4 110.3 114.7 108.7 116.9C109.5 117.1 110.2 117.3 111 117.7C112.1 118.3 113.1 119 114 119.8ZM119.2 108.7C120 108.7 121.3 108.5 122.4 107.5C123.3 106.7 123.8 105.5 123.9 104.2C122.7 104.5 121.6 104.7 120.4 104.7C120.3 104.7 120.1 104.7 120 104.7C118.4 104.7 116.9 104.5 115.4 104C115.3 104.3 115.2 104.6 115.1 104.9C115 105.3 114.8 105.6 114.7 106C115.1 106.1 115.5 106.2 116 106.4C117.6 107 118.6 107.9 119.2 108.7ZM124.2 99.7C124.8 99.1 125.4 98 125.6 96.6C125.6 96.1 125.6 95.7 125.6 95.3C124.4 95.6 123.2 95.7 122 95.7C121.6 95.7 121.2 95.7 120.8 95.7C119.6 95.6 118.5 95.4 117.3 95.1C117.1 96.7 116.9 98.4 116.5 100.1C117.5 100.5 118.8 100.7 120.3 100.7C121.7 100.6 123 100.3 124.2 99.7ZM126.5 91C127.4 90.7 130.1 89.4 131.6 86.3C132.1 85.3 132.3 84.2 132.4 83.2C131.3 84.3 130 85.3 128.3 86.1C126.1 87.1 124 87.5 122 87.5C120.2 87.5 118.6 87.2 117.3 86.8C117.4 88.1 117.5 89.4 117.5 90.9C118.7 91.3 119.9 91.5 121.1 91.6C122.9 91.8 124.7 91.5 126.5 91ZM133 74.1C131.8 75.3 130.3 76.4 128.6 77.2C125.1 78.9 121.9 79.4 119.2 79.4C118.8 79.4 118.4 79.4 118 79.4C117.8 80.4 117.6 81.5 117.3 82.5C119.3 83.3 122.9 84.2 126.6 82.4C129.1 81.2 130.6 79.2 131.4 77.8L131.9 76.9C132.2 76.2 132.7 75.3 133 74.1ZM120.2 54.8C119.1 56.5 117.8 57.9 116.2 59.1C117.1 61 117.8 63.2 118.3 65.6C120 65 122.1 63.8 123.9 61.8C127.1 58.2 127.4 54.1 127.4 52.5C127.3 51.9 127.2 50.5 126 49.3C125.1 48.4 124 48.1 123.2 48C122.6 50.4 121.6 52.7 120.2 54.8ZM110.8 52.4C111.9 53.2 113 54.3 114 55.5C115.1 54.6 116.1 53.6 116.9 52.4C118.6 49.8 119.3 47.3 119.5 45.6C119.6 45 119.8 42.9 118.3 41.1C118 40.8 117.7 40.5 117.4 40.3C116.9 42.5 116.1 44.5 115.1 46.5C113.9 48.7 112.5 50.7 110.8 52.4ZM103.2 50.4C104.4 50.4 105.5 50.4 106.7 50.7C108.7 49 110.3 47 111.5 44.7C112.7 42.4 113.5 39.9 113.8 37.3C113.7 36.6 113.5 35 112.1 33.7C111.4 33.1 110.7 32.7 110 32.5C109.8 36 109.1 39.4 107.8 42.6C106.6 45.7 105 48.2 103.2 50.4ZM95.6 39.5C94.1 42.9 91.7 46.9 90.2 49.2C92.2 50.4 93.7 51.9 94.7 53.2C97.9 50.8 101.8 46.9 104.1 41.1C105.4 37.8 106.1 34.3 106.1 30.7C105.5 29.7 104.3 28.3 102.4 27.3C101 26.6 99.7 26.4 98.6 26.4C98.3 31.1 97.3 35.5 95.6 39.5ZM76.7 34.2C77.2 38.5 78.2 42.7 79.7 46.8C81.4 46.7 83.8 46.7 86.3 47.5C87.7 45.4 90.3 41.2 91.8 37.8C93.4 34.1 94.4 30 94.6 25.5C92.4 24.1 85.9 20.6 77.2 20.6C77.1 20.6 76.9 20.6 76.7 20.6C76.2 25.1 76.2 29.7 76.7 34.2ZM61.5 43.2C65.7 53 73.9 57.4 77.3 58.9C78.5 58.9 79.9 58.8 81.5 58.5C80.7 57.7 80 56.8 79.4 55.8C78.2 54 77.2 51.9 76.6 49.8C74.7 44.9 73.4 39.9 72.8 34.7C72.2 30.1 72.2 25.5 72.6 20.9C65.9 21.9 61.2 24.6 59.6 25.7C58.9 29.5 58.4 36.1 61.5 43.2ZM48.2 30.6C48.2 34.2 48.9 37.7 50.2 41C52.7 47.4 56.9 51.2 59.2 53C60 53.5 60.7 53.9 61.3 54.3L61.3 54.4C62.5 55.1 64.3 56 66.4 56.8C63.2 53.9 59.9 50 57.6 44.7C54.6 37.5 54.7 30.8 55.3 26.4C54.3 26.5 53.2 26.7 52 27.3C50.1 28.2 49 29.7 48.2 30.6ZM40.6 37.3C40.9 39.9 41.7 42.4 42.9 44.7C44.1 46.9 45.8 49 47.7 50.7C48.9 50.4 50 50.3 51.1 50.4C49.4 48.3 47.8 45.7 46.6 42.6C45.4 39.4 44.6 36 44.4 32.5C43.7 32.7 43 33.1 42.3 33.7C40.9 35 40.7 36.6 40.6 37.3ZM35.1 45.7C35.3 47.4 36 50 37.7 52.5C38.5 53.7 39.5 54.7 40.6 55.6C41.5 54.4 42.6 53.3 43.8 52.5C42 50.8 40.6 48.8 39.4 46.6C38.4 44.6 37.6 42.6 37.1 40.4C36.8 40.6 36.5 40.9 36.2 41.2C34.7 43 34.9 45.1 35.1 45.7ZM27 52.5C27 54.2 27.4 58.3 30.5 61.8C32.3 63.9 34.4 65 36.1 65.6C36.5 63.2 37.3 61 38.2 59.1C36.7 57.9 35.3 56.4 34.2 54.8C32.8 52.8 31.8 50.4 31.2 48C30.4 48.1 29.3 48.4 28.4 49.3C27.3 50.4 27.1 51.9 27 52.5ZM20.4 66.4C21.1 67.7 23.6 71.8 27.6 73.7C30.7 75.2 33.7 75.5 35.8 75.4C35.6 73.4 35.6 71.4 35.7 69.6C33.4 68.9 30.3 67.4 27.6 64.4C25.4 62 24.3 59.4 23.7 57.1C22.3 59.1 21 61.7 20.5 65.1C20.4 65.5 20.3 65.9 20.4 66.4ZM47.9 132.7L47.6 134.2C47.4 135.4 47.2 137.7 48.4 140.2C48.6 140.6 48.8 141 49 141.3C49.5 139.9 50.4 138.4 51.8 137C52.4 136.5 52.9 136.1 53.5 135.7C50.3 135 48.4 132.1 47.7 130.3L46.5 127L49.9 127.6C51 127.8 52.1 127.7 53.1 127.5C52.2 126.9 51.3 126.1 50.5 125C49.3 123.5 48.7 122 48.3 120.7C47.4 120.7 46.3 120.9 45.2 121.4C44.1 121.9 43.3 122.7 42.8 123.3C42.5 124.1 41.9 126.5 43.1 128.9C44 130.8 45.6 131.7 46.4 132.1L47.9 132.7ZM56.4 148.4C55.6 145.9 55.6 143.4 56.5 141.2L56.5 141.1C57 139.9 57.6 138.9 58.3 138C57.2 138.3 55.8 138.8 54.5 140C52.6 141.8 52.2 144.2 52.1 145.2L52.1 145.6C52 147.8 52.4 149.9 53.3 151.8C53.7 152.8 54.3 153.6 54.9 154.4C55.6 153.7 56.3 152.7 56.6 151.3C56.7 150.4 56.7 149.5 56.4 148.4ZM65.6 159.7C65.4 158.1 65 156.5 64.4 155C63.5 153.1 62.5 150 63.1 146.2C63.3 144.7 63.8 143.1 64.5 141.7C63.6 141.2 62.8 140.7 62 140.2C61.4 140.8 60.8 141.7 60.4 142.8C59.7 144.5 60 146.3 60.3 147.4C60.8 149 60.9 150.5 60.6 152.1C60.1 155.1 58.4 157 57.1 158.1C57.7 159.5 58.7 161.2 60.6 162.7C62.2 163.9 63.9 164.5 65.2 164.7C65.6 163 65.7 161.3 65.6 159.7ZM76.6 158C76.5 156.4 76.2 155.6 75.7 154.5C75.2 153.2 74.6 151.8 74.4 149.4C74.3 147.9 74.3 146.3 74.6 144.8C72.3 144.5 70.1 144 68.2 143.3C67.7 144.4 67.3 145.6 67.1 146.8C66.7 149.7 67.6 152.1 68.1 153.3C68.9 155.2 69.4 157.2 69.6 159.3C69.8 161.7 69.5 164.3 68.8 166.7C69.7 168.6 71 169.9 71.9 170.6C72.9 169.8 74.3 168.3 75.3 166.1C75.5 165.7 77 161.6 76.6 158ZM85.3 153.5L86.2 152.4C86.9 151.5 88.3 149.3 88.1 146.3C88 144.9 87.6 143.7 87.1 142.8C84.7 143.8 81.9 144.5 78.9 144.7C78.6 146.1 78.5 147.5 78.6 148.9C78.7 150.7 79.1 151.6 79.6 152.7C80.1 153.9 80.6 155.2 80.8 157.5C81 161.2 80 165 79.4 166.7C80.4 168.6 81.6 169.9 82.5 170.6C83.4 169.8 84.9 168.3 85.9 166.1C85.9 166.1 87.8 162.6 87.6 159.7C87.4 157.5 86.6 155.8 86 154.8L85.3 153.5ZM93.2 134.7C92.7 134.6 92.2 134.4 91.7 134.2C90.7 133.9 89.8 133.6 88.8 133.3C87 135.3 83.1 138.6 77.6 138.7C77.5 138.7 77.4 138.7 77.3 138.7C71.6 138.7 67.6 135.3 65.8 133.3C64.8 133.6 63.9 133.9 62.9 134.2C62.4 134.4 61.9 134.5 61.4 134.7C64.3 137.1 70 140.8 77.2 140.8C84.5 140.8 90.1 137 93.2 134.7ZM97.8 151.6C97.4 149.9 96.5 148.7 95.8 148L94.8 147L95.4 145.7C95.8 144.9 96.6 142.9 95.9 140.6C95.7 139.7 95.2 139 94.8 138.4C93.7 139.3 92.3 140.3 90.6 141.2C91.3 142.5 91.9 144.2 92 146.2C92.3 149.6 91.1 152.3 90.1 153.9C91 155.6 91.5 157.6 91.6 159.5C91.7 161.3 91.5 162.9 91.1 164.2C92 163.9 92.9 163.4 93.8 162.7C96.4 160.7 97.3 158.2 97.7 156.8L97.9 156.2C98.2 155.1 98.5 153.4 97.8 151.6ZM99.9 146.1C100.8 147.3 101.5 148.6 101.9 150C102.4 148.3 102.4 146.8 102.4 145.7C102.2 143.4 101.8 141.2 101 139.1C100.6 138 100.2 137 99.6 136L99.5 136C99.1 136 98.7 136 98.3 135.9C99 136.8 99.6 138 100 139.4C100.7 142.1 100.3 144.6 99.9 146.1ZM106.6 132.8L108 132.1C108.8 131.7 110.4 130.7 111.3 128.9C112.5 126.6 111.9 124.2 111.6 123.3C111.1 122.7 110.3 121.9 109.2 121.4C108.1 120.9 107 120.8 106.1 120.8C105.7 122.1 105.1 123.6 103.9 125.1C103.1 126.1 102.2 127 101.3 127.6C102.3 127.8 103.3 127.9 104.5 127.7L107.9 127.1L106.7 130.4C106.3 131.6 105.2 133.5 103.4 134.7C103.9 135.6 104.3 136.6 104.7 137.6C105.1 138.7 105.4 139.9 105.7 141C105.9 140.8 106 140.6 106.1 140.3C107.3 137.8 107.1 135.5 106.9 134.3L106.6 132.8Z"/>
                <path className="logo__face"
                      d="M105.3 89.3C103.1 89.8 100.9 90 98.6 90.2C98.6 90.3 98.6 90.3 98.6 90.4C98.6 92.7 96.7 94.5 94.5 94.5C92.2 94.5 90.4 92.6 90.4 90.4C90.4 90.3 90.4 90.3 90.4 90.2C88.2 90 85.9 89.7 83.7 89.3L81.1 88.8L82.2 86.4C84 82.6 87.4 79.9 91.4 79L82.8 80.3L82.2 76.3L99.3 73.7L106.8 76.7L105.3 80.5L98.9 77.9L93.7 78.7C94 78.7 94.3 78.7 94.6 78.7C99.9 78.7 104.7 81.8 106.9 86.5L108 88.9L105.3 89.3ZM101.7 85.9C99.9 84 97.4 82.8 94.7 82.8C92 82.8 89.5 84 87.7 85.9C90 86.2 92.3 86.4 94.7 86.4C97 86.4 99.3 86.2 101.7 85.9Z"/>
                <path className="logo__face"
                      d="M55 74L73.8 76.8L73.8 105.3L69.7 105.3L69.7 89.7C67.8 90 65.8 90.3 63.8 90.4C63.8 90.5 63.8 90.5 63.8 90.6C63.8 92.9 61.9 94.7 59.7 94.7C57.4 94.7 55.6 92.8 55.6 90.6C55.6 90.5 55.6 90.5 55.6 90.4C53.4 90.2 51.1 89.9 48.9 89.5L46.3 89L47.4 86.6C49.7 81.9 54.5 78.8 59.7 78.8C60 78.8 60.3 78.8 60.6 78.8L55.4 78L49 80.6L47.5 76.8L55 74ZM66.8 85.9C65 84 62.5 82.8 59.8 82.8C57.1 82.8 54.6 84 52.8 85.9C55.1 86.2 57.4 86.4 59.8 86.4C62.1 86.4 64.4 86.2 66.8 85.9ZM62.8 79.1C65.4 79.7 67.9 81.1 69.7 83.1L69.7 80.1L62.8 79.1Z"/>
                <g>
                    <path className="logo__text"
                          d="M165.7 68.4C165.7 59.1 172.9 51.8 182.1 51.8C186.8 51.8 191.4 54.1 194.1 57.7L194.1 52.4L198.6 52.4L198.6 84.4L194.1 84.4L194.1 79.1C191.4 82.7 186.8 85 182.1 85C172.9 85 165.7 77.7 165.7 68.4ZM182.3 80.8C189.1 80.8 194.5 75.4 194.5 68.4C194.5 61.4 189.1 56 182.3 56C175.6 56 170.2 61.6 170.2 68.4C170.2 75.3 175.7 80.8 182.3 80.8Z"/>
                    <path className="logo__text"
                          d="M230.7 57.7L230.7 52.4L235.2 52.4L235.2 83.3C235.2 93.1 229 99.5 219.4 99.5C212.1 99.5 206.9 96.4 204.4 90.6L204.2 90.1L208.6 88.6L208.8 89C210.6 93.2 214.1 95.3 219.4 95.3C226.2 95.3 230.7 90.6 230.7 83.4L230.7 79C228 82.6 223.3 85 218.6 85C209.4 85 202.2 77.7 202.2 68.4C202.2 59.1 209.4 51.8 218.6 51.8C223.3 51.8 227.9 54.1 230.6 57.7L230.7 57.7ZM218.7 56C212 56 206.6 61.6 206.6 68.4C206.6 75.2 212 80.8 218.7 80.8C225.5 80.8 230.9 75.4 230.9 68.4C230.9 61.5 225.6 56 218.7 56Z"/>
                    <path className="logo__text" d="M239.8 52.4L244.3 52.4L244.3 84.4L239.8 84.4L239.8 52.4Z"/>
                    <path className="logo__text" d="M249.5 38.2L254.1 38.2L254.1 84.5L249.5 84.5L249.5 38.2Z"/>
                    <path className="logo__text"
                          d="M274.3 85.1C264.4 85.1 257.5 78.4 257.5 68.7C257.5 59.1 264.7 51.9 274.1 51.9C283.6 51.9 290.5 58.7 290.5 68.1L290.5 70.1L262 70.1C262.7 76.6 267.6 80.9 274.3 80.9C279.6 80.9 283.5 78.4 285.6 73.5L285.8 73L289.8 74.9L289.6 75.3C286.6 81.8 281.5 85 274.3 85.1ZM285.8 65.9C285 59.9 280.5 56 274.2 56C268.2 56 263.4 60 262.2 65.9L285.8 65.9Z"/>
                    <path className="logo__text"
                          d="M170 102.9L170 105.4L164.7 105.4L164.7 109.6L170 109.6L170 137.4L174.5 137.4L174.5 109.6L182.4 109.6L182.4 105.4L174.5 105.4L174.5 103C174.5 96.4 175.5 95.4 181.9 95.4L182.4 95.4L182.4 91.1L181.6 91.1C172.6 91.2 170 93.8 170 102.9Z"/>
                    <path className="logo__text"
                          d="M202.7 105.4L199.3 105.4C195.2 105.4 191.8 107.1 189.7 110.1L189.7 105.4L185.2 105.4L185.2 137.4L189.7 137.4L189.7 120.7C189.7 113.5 193 109.7 199.2 109.7L202.6 109.7L202.6 105.4L202.7 105.4Z"/>
                    <path className="logo__text"
                          d="M234 121.1L234 123.1L205.4 123.1C206.1 129.6 211 133.9 217.7 133.9C223 133.9 226.9 131.4 229 126.5L229.2 126L233.2 127.9L233 128.3C230 134.7 224.9 138 217.8 138C207.9 138 201 131.3 201 121.6C201 112 208.2 104.8 217.6 104.8C227.1 104.8 234 111.6 234 121.1ZM229.2 118.9C228.4 112.9 223.9 109 217.6 109C211.6 109 206.8 113 205.6 118.9L229.2 118.9Z"/>
                    <path className="logo__text"
                          d="M264.5 105.4L269 105.4L269 137.4L264.5 137.4L264.5 132.1C261.8 135.7 257.2 138 252.5 138C243.3 138 236.1 130.7 236.1 121.4C236.1 112.1 243.3 104.8 252.5 104.8C257.2 104.8 261.8 107.1 264.5 110.7L264.5 105.4ZM252.7 109C246 109 240.6 114.6 240.6 121.4C240.6 128.2 246 133.8 252.7 133.8C259.5 133.8 264.9 128.4 264.9 121.4C264.9 114.5 259.5 109 252.7 109Z"/>
                    <path className="logo__text"
                          d="M300.1 105.4L294.2 105.4L277.3 123L277.3 91.2L272.8 91.2L272.8 137.4L277.3 137.4L277.3 128.5L283.7 121.8L295.1 137.4L300.5 137.4L286.9 119L300.1 105.4Z"/>
                    <path className="logo__text"
                          d="M313.1 119L312.7 118.9C308.5 117.8 304.8 116.9 304.8 113.8C304.8 110.8 307.5 108.8 311.7 108.8C315 108.8 317.7 110 319.8 112.3L320.1 112.7L323.5 109.9L323.2 109.5C320.6 106.5 316.4 104.7 311.7 104.7C304.2 104.7 300.4 109.3 300.4 113.8C300.4 120.3 306.7 121.9 310.9 122.9L311.7 123.1C315.8 124.1 319.4 125 319.4 128.2C319.4 130.8 317.4 133.9 311.9 133.9C308.2 133.9 304.8 132.2 302.6 129.1L302.3 128.7L298.7 131.6L299 132C301.8 135.8 306.6 138 311.8 138C319.7 138 323.9 133.1 323.9 128.2C323.9 121.7 317.7 120.1 313.1 119Z"/>
                    <path className="logo__text"
                          d="M242 46.9C240.4 46.9 239.1 45.6 239.1 44C239.1 42.4 240.4 41.1 242 41.1C243.6 41.1 244.9 42.4 244.9 44C244.9 45.6 243.6 46.9 242 46.9Z"/>
                </g>
            </g>
        </svg>
    );
}
