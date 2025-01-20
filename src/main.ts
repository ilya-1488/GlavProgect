import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('.app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const popUp = document.getElementById('pop_up');
      const popUpClose = document.querySelector('.pop_up_close');
      const openPopUp = document.getElementById('open_pop_up');
      const registrationMessage = document.getElementById('registrationMessage');
      const registerForm = document.querySelector('form') as HTMLFormElement; // Приводим к нужному типу

      let userNameInputEl: HTMLInputElement | null = document.querySelector('input[type="text"]') as HTMLInputElement | null;


       if (popUp) {
           popUp.style.display = 'none'; // Скрываем всплывающее окно по умолчанию
        }

         openPopUp?.addEventListener('click', () => {
              console.log('Клик по кнопке открытия всплывающего окна');
              if (popUp) {
              popUp.style.display = 'flex';
              }
         });

          popUpClose?.addEventListener('click', () => {
             console.log('Клик по кнопке закрытия всплывающего окна');
             if (popUp) {
               popUp.style.display = 'none';
             }
          });

          if(registerForm) {
             registerForm.addEventListener('submit', (event) => {
               event.preventDefault();
               console.log('Form submitted')
    
               if (!userNameInputEl) {
               console.log("Error: userNameInputEl is missing");
               customAlert("Error: user name input not found");
               return;
              }
      
               const userName: string = userNameInputEl.value.trim();
      
                if (userName === "") {
                    customAlert("Please enter your name");
                return;
               }
               const message: string = "Thanks, " + userName + "! You have successfully registered :)";
               if (registrationMessage) {
                  registrationMessage.innerText = message;
                   registrationMessage.style.display = "block";
                }
               console.log(message);
                customAlert("Thanks, " + userName + "! You have successfully registered.");
               if(popUp) {
                 popUp.style.display = "none";
               }

                });
         }

         function customAlert(message: string): void {
             alert(message);
          }
