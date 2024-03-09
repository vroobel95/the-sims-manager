import React from 'react';
import cx from 'clsx';
import { useDebounceValue } from 'usehooks-ts';
import { Button } from '../shared/Button/Button';
import { Heading } from '../shared/Heading/Heading';
import { IconGoogle } from '../shared/Icons/Google';
import { Input } from '../shared/Input/Input';
import { Label } from '../shared/Label/Label';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import styles from './LoginPage.module.scss';
import { app } from '../../firebaseConfig';
import { CreateStickyAlert } from '../shared/StickyAlert/StickyAlert';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useDebounceValue(
    '',
    500,
  );
  const [password, setPassword] =
    useDebounceValue('', 500);

  const authBasic = getAuth();
  const authGoogle = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleLogInWithEmailAndPassword = () => {
    signInWithEmailAndPassword(
      authBasic,
      email,
      password,
    )
      .then((userCredential) => {
        const user = userCredential.user;
        CreateStickyAlert('Successful login');
        console.log(
          `user: ${JSON.stringify(user)}`,
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        CreateStickyAlert(
          `Error occured during login: ${errorMessage}`,
        );

        console.log(
          `error code: ${JSON.stringify(
            errorCode,
          )}`,
        );
        console.log(
          `error message: ${JSON.stringify(
            errorMessage,
          )}`,
        );
      });
  };

  const handleLogInWithGoogle = () => {
    signInWithPopup(authGoogle, googleProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        CreateStickyAlert('Successful login');
        console.log(
          `user: ${JSON.stringify(user)}`,
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        CreateStickyAlert(
          `Error occured during login: ${errorMessage}`,
        );

        console.log(
          `error code: ${JSON.stringify(
            errorCode,
          )}`,
        );
        console.log(
          `error message: ${JSON.stringify(
            errorMessage,
          )}`,
        );
      });
  };

  return (
    <div className={cx(styles['login-page'])}>
      <div
        className={cx(
          styles['login-page__panel'],
        )}
      >
        <Heading
          tag={'h2'}
          className={cx(
            styles['login-page__panel-title'],
          )}
        >
          {'Sign In'}
        </Heading>
        <Input
          label="E-mail"
          onChange={setEmail}
        />
        <Input
          type={'password'}
          label="Password"
          onChange={setPassword}
        />
        <Button
          label="Log in"
          onClick={
            handleLogInWithEmailAndPassword
          }
        />
        <Label>or</Label>
        <Button
          label="Sign in with Google"
          icon={IconGoogle}
          onClick={handleLogInWithGoogle}
        />
      </div>
    </div>
  );
};
