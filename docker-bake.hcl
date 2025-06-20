group "default" {
  targets = ["react-app"]
}

variable "COMMITHASH" {
  type = string
  default = "latest"
}

target "react-app" {
  context = "."
  dockerfile = "Dockerfile"
  tags = ["271122/ali.viation:${COMMITHASH}", "271122/ali.viation:latest"]
  platforms = ["linux/amd64", "linux/arm64"]
}

target "ci-pipeline" {
  context = "."
  dockerfile = "Dockerfile.ci"
  tags = ["271122/ali.viation:${COMMITHASH}", "271122/ali.viation:latest"]
  platforms = ["linux/amd64", "linux/arm64"]
}
