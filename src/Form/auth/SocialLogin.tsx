import Button from "../ui/Button";

const SocialLogin = () => {
  return (
    <div className="space-y-3">
      <Button variant="social" fullWidth icon={<span>📘</span>}>
        Continue with Facebook
      </Button>
      <Button variant="social" fullWidth icon={<span>🔍</span>}>
        Continue with Google
      </Button>
      <Button variant="social" fullWidth icon={<span>🍎</span>}>
        Continue with Apple
      </Button>
    </div>
  );
};

export default SocialLogin;
