group "default" {
  targets = ["react-app"]
}

variable "TAG" {
  type = string
  default = "latest"
}

target "react-app" {
  context = "."
  dockerfile = "Dockerfile"
  tags = ["271122/ali.viation:${TAG}", "271122/ali.viation:latest"]
  platforms = ["linux/amd64", "linux/arm64"]
}
